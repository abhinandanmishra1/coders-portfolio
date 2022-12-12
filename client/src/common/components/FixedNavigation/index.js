import React, {useEffect} from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { SiCodeforces, SiHackerrank, SiLeetcode, SiCodechef, SiGithub } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import "./index.scss";

import {
  loadCodeforcesProfile,
} from "stores/codeforcesProfile";
import { 
  loadHackerrankProfile,
} from "stores/hackerrankProfile";
import {
  loadLeetcodeProfile,
} from "stores/leetcodeProfile";

import { defaultUser } from "utils/constants";

const FixeNavigation = ({isShowDefault, user}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pageName = pathname.split("/").pop() || 'undefined';
  const userData = isShowDefault || !user? defaultUser : user; 
  const store = useSelector((state) => state);
  console.log(store)
  const {
    githubUsername,
    codeforcesUsername,
    hackerrankUsername,
    leetcodeUsername,
    codechefUsername,
    portfolioUsername,
  } = userData;

  const baseUrl = `/${portfolioUsername}/profile`;

  useEffect(() => {
    batch(() => {
      dispatch(loadCodeforcesProfile(codeforcesUsername));
      dispatch(loadHackerrankProfile(hackerrankUsername));
      dispatch(loadLeetcodeProfile(leetcodeUsername));
    });
  }, [dispatch, codeforcesUsername, hackerrankUsername, leetcodeUsername]);

  const toggleMenu = () => {
    document.getElementById('circularMenu').classList.toggle('active');
  };

	return (
		<div>
			<div id="circularMenu" className={`circular-menu circular-menu-left circular-menu`}>
				<li onClick={toggleMenu} className={`floating-btn floating-btn-${pageName}`}>
					<FaBars />
				</li>

				<menu className="items-wrapper">
          <Link onClick={toggleMenu} className={`menu-item menu-item-${pageName}`} to={`${baseUrl}/codeforces`}> <SiCodeforces /> </Link>
          <Link onClick={toggleMenu} className={`menu-item menu-item-${pageName}`} to={`${baseUrl}/hackerrank`}> <SiHackerrank /> </Link>
          <Link onClick={toggleMenu} className={`menu-item menu-item-${pageName}`} to={`${baseUrl}/leetcode`}> <SiLeetcode /> </Link>
          <Link onClick={toggleMenu} className={`menu-item menu-item-${pageName}`} to={`${baseUrl}/codechef`}> <SiCodechef /> </Link>
          <Link onClick={toggleMenu} className={`menu-item menu-item-${pageName}`} to={`${baseUrl}/github`}> <SiGithub /> </Link>
				</menu>
			</div>
		</div>
	);
};

export default FixeNavigation;
