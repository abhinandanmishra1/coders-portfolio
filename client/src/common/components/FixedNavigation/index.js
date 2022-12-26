import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
	SiCodeforces,
	SiHackerrank,
	SiLeetcode,
	SiCodechef,
	SiGithub,
} from "react-icons/si";
import { FaBars } from "react-icons/fa";
import "./index.scss";

import { loadCodeforcesProfile } from "stores/codeforcesProfile";
import { loadHackerrankProfile } from "stores/hackerrankProfile";
import { loadLeetcodeProfile } from "stores/leetcodeProfile";
import { loadGithubProfile } from "stores/githubProfile";
import { loadCodechefProfile } from "stores/codechefProfile";

import { defaultUser } from "utils/constants";

const FixeNavigation = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const pageName = pathname.split("/")[3] || "undefined";

	const { profile } = useSelector((store) => store.user);

  const { username } = useParams();

	const {
		githubUsername,
		codeforcesUsername,
		hackerrankUsername,
		leetcodeUsername,
		codechefUsername,
	} = profile || (username ==="abhinandanmishra1" && defaultUser) || {};

	const baseUrl = `/${username}/profile`;

	useEffect(() => {
		batch(() => {
			if (codeforcesUsername)
				dispatch(loadCodeforcesProfile(codeforcesUsername));

			if (hackerrankUsername)
				dispatch(loadHackerrankProfile(hackerrankUsername));

			if (leetcodeUsername) dispatch(loadLeetcodeProfile(leetcodeUsername));

			if (githubUsername) dispatch(loadGithubProfile(githubUsername));

			if (codechefUsername) dispatch(loadCodechefProfile(codechefUsername));
		});
	}, [
		dispatch,
		codeforcesUsername,
		hackerrankUsername,
		leetcodeUsername,
		githubUsername,
		codechefUsername,
	]);

	const toggleMenu = () => {
		document.getElementById("circularMenu").classList.toggle("active");
	};

	return (
		<div>
			<div
				id="circularMenu"
				className={`circular-menu circular-menu-left circular-menu`}
			>
				<li
					onClick={toggleMenu}
					className={`floating-btn floating-btn-${pageName}`}
				>
					<FaBars />
				</li>

				<menu className="items-wrapper">
					<Link
						onClick={toggleMenu}
						className={`menu-item menu-item-${pageName}`}
						to={`${baseUrl}/codeforces`}
					>
						{" "}
						<SiCodeforces />{" "}
					</Link>
					<Link
						onClick={toggleMenu}
						className={`menu-item menu-item-${pageName}`}
						to={`${baseUrl}/hackerrank`}
					>
						{" "}
						<SiHackerrank />{" "}
					</Link>
					<Link
						onClick={toggleMenu}
						className={`menu-item menu-item-${pageName}`}
						to={`${baseUrl}/leetcode`}
					>
						{" "}
						<SiLeetcode />{" "}
					</Link>
					<Link
						onClick={toggleMenu}
						className={`menu-item menu-item-${pageName}`}
						to={`${baseUrl}/codechef`}
					>
						{" "}
						<SiCodechef />{" "}
					</Link>
					<Link
						onClick={toggleMenu}
						className={`menu-item menu-item-${pageName}`}
						to={`${baseUrl}/github`}
					>
						{" "}
						<SiGithub />{" "}
					</Link>
				</menu>
			</div>
		</div>
	);
};

export default FixeNavigation;
