import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { loadUser } from "stores/userProfile";
import BgImage from "assets/images/bg.jpg";
import Main from "./Main";

const Portfolio = () => {
	const dispatch = useDispatch();

	const isLoggedIn = localStorage.getItem("loggedIn") === "true";
	const { profile } = useSelector((store) => store.user);

	const { username } = useParams();

	useEffect(() => {
		if (Object.keys(profile).length === 0) {
				dispatch(loadUser({ username }));
		}
	}, [dispatch, isLoggedIn, profile, username]);

	return (
		<Main />
	);
};

export default Portfolio;
