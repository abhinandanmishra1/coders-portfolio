import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button";
import Navbar from "components/Navbar";
import About from "./About";
import Working from "./Working";

const Home = () => {
	const navigate = useNavigate();

	const signUp = () => {
		navigate("/auth/signup");
	};

	const defaultProfile = () => {
		navigate("/abhinandanmishra1/profile");
	};

	const ViewProfile = () => {
		navigate("/viewProfile");
	};

	return (
		<div className="main">
			<Navbar />
			<div className="home">
				<div className="home__intro-title">
					<h1>
						Platform for{" "}
						<span>
							{"<"}coders {"/>"}
						</span>{" "}
						to showcase their <span>coding experience</span>
					</h1>
				</div>
				<p className="home__intro-subtitle">
					{" "}
					This application integrates with leading coding platforms, such as
					GitHub, LeetCode, Codechef, Codeforces, and Hackerrank
					<span>
						, to fetch your data and create a stunning page that showcases your
						achievements across all these platforms
					</span>
				</p>
				<div className="home__create-portfolio">
					<div className="home__create-portfolio--input-container">
						<span className="home__create-portfolio--input-text">
							potfolio.render.com/
						</span>
						<input
							className="home__create-portfolio--input"
							type="text"
							placeholder="yourUsername"
						/>
					</div>
					<div class="home__create-portfolio--btn">Create Portfolio</div>
				</div>
			</div>
			<About />
			<Working />
		</div>
	);
};

export default Home;
