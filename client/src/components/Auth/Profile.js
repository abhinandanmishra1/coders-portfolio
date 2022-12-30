import Bracket from "common/components/JsonInput/Bracket";
import JsonInput from "common/components/JsonInput/JsonInput";
import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "common/components/Button";
import { loadUser, updateUser } from "stores/userProfile";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import ProjectInput from "./ProjectInput";
import { FaPlusCircle } from "react-icons/fa";

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isLoggedIn = localStorage.getItem("loggedIn") === "true";
	const [counts, setCounts] = useState({
		experienceCount: 1,
		educationCount: 1,
		projectCount: 1,
	});

	const {
		profile: user,
		experiences,
		education,
		projects,
	} = useSelector((store) => store.user);

	const {
		leetcodeUsername,
		codeforcesUsername,
		githubUsername,
		codechefUsername,
		hackerrankUsername,
		username,
		email,
		linkedinUrl,
		githubUrl,
		instagramUrl,
		twitterUrl,
		resumeUrl,
		fullName,
		designation,
		about,
		country,
	} = user || {};

	const [formData, setFormData] = useState({
		leetcodeUsername,
		codeforcesUsername,
		githubUsername,
		codechefUsername,
		hackerrankUsername,
		username,
		email,
		linkedinUrl,
		githubUrl,
		instagramUrl,
		twitterUrl,
		resumeUrl,
		fullName,
		designation,
		about,
		country,
	});

	useEffect(() => {
		if (isLoggedIn) {
			if (Object.keys(user).length === 0) {
				const token = localStorage.getItem("token");
				dispatch(loadUser({ token }));
			} else {
				setFormData({
					leetcodeUsername,
					codeforcesUsername,
					githubUsername,
					codechefUsername,
					hackerrankUsername,
					username,
					email,
					linkedinUrl,
					githubUrl,
					instagramUrl,
					twitterUrl,
					resumeUrl,
					fullName,
					designation,
					about,
					country,
				});
			}
		} else {
			navigate("/auth/login");
		}
	}, [
		isLoggedIn,
		navigate,
		dispatch,
		user,
		leetcodeUsername,
		codeforcesUsername,
		githubUsername,
		codechefUsername,
		hackerrankUsername,
		username,
		email,
		linkedinUrl,
		githubUrl,
		instagramUrl,
		twitterUrl,
		resumeUrl,
		fullName,
		designation,
		about,
		country,
	]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateUser(formData));
	};

	const logout = useCallback(() => {
		localStorage.setItem("loggedIn", false);
		localStorage.removeItem("token");
		navigate("/auth/login");
	}, [navigate]);

	const viewPortfolio = useCallback(() => {
		navigate(`/${username}/profile`);
	}, [navigate, username]);

	return (
		<div className="admin">
			<h1>
				Profile @{formData.username}
				<div className="admin__buttons">
					<Button
						title="Logout"
						onClick={logout}
						customClass="admin__btn"
					></Button>
					<Button
						title="View Portfolio"
						onClick={viewPortfolio}
						customClass="admin__btn"
					></Button>
				</div>
			</h1>
			<div class="admin__form">
				<Bracket
					objectName="User"
					objectSeparator="="
					openBracket={"{"}
					closeBracket={"}"}
				>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="fullName"
						defaultValue={formData.fullName}
					/>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="about"
						defaultValue={formData.about}
					/>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="designation"
						defaultValue={formData.designation}
					/>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="country"
						defaultValue={formData.country}
					/>
					<JsonInput
						onChange={handleChange}
						type="email"
						fieldName="email"
						defaultValue={formData.email}
					/>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="leetcodeUsername"
						defaultValue={formData.leetcodeUsername}
					/>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="codeforcesUsername"
						defaultValue={formData.codeforcesUsername}
					/>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="githubUsername"
						defaultValue={formData.githubUsername}
					/>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="codechefUsername"
						defaultValue={formData.codechefUsername}
					/>
					<JsonInput
						onChange={handleChange}
						type="text"
						fieldName="hackerrankUsername"
						defaultValue={formData.hackerrankUsername}
					/>
					<JsonInput
						onChange={handleChange}
						type="url"
						fieldName="githubUrl"
						defaultValue={formData.githubUrl}
					/>
					<JsonInput
						onChange={handleChange}
						type="url"
						fieldName="linkedinUrl"
						defaultValue={formData.linkedinUrl}
					/>
					<JsonInput
						onChange={handleChange}
						type="url"
						fieldName="instagramUrl"
						defaultValue={formData.instagramUrl}
					/>
					<JsonInput
						onChange={handleChange}
						type="url"
						fieldName="twitterUrl"
						defaultValue={formData.twitterUrl}
					/>
					<JsonInput
						onChange={handleChange}
						type="url"
						fieldName="resumeUrl"
						defaultValue={formData.resumeUrl}
					/>

					<Bracket
						objectName="education"
						objectSeparator=":"
						openBracket={"["}
						closeBracket={"]"}
						isEndComma={true}
					>
						{education.map((edu) => {
							return <EducationInput education={edu} />;
						})}
						<EducationInput />
						{[...Array(counts.educationCount).keys()].map(() => {
							return <EducationInput />;
						})}
						<FaPlusCircle
							className="json__add-more"
							onClick={() =>
								setCounts((counts) => {
									return { ...counts, educationCount: counts.educationCount + 1 };
								})
							}
						/>
					</Bracket>
					<Bracket
						objectName="experiences"
						objectSeparator=":"
						openBracket={"["}
						closeBracket={"]"}
						isEndComma={true}
					>
						{experiences.map((experience) => {
							return <ExperienceInput {...{ experience }} />;
						})}
						<ExperienceInput />
						{[...Array(counts.experienceCount).keys()].map(() => {
							return <ExperienceInput />;
						})}
						<FaPlusCircle
							className="json__add-more"
							onClick={() =>
								setCounts((counts) => {
									return { ...counts, experienceCount: counts.experienceCount + 1 };
								})
							}
						/>
					</Bracket>
					<Bracket
						objectName="projects"
						objectSeparator=":"
						openBracket={"["}
						closeBracket={"]"}
						isEndComma={true}
					>
						{projects.map((project) => {
							return <ProjectInput {...{ project }} />;
						})}
						{[...Array(counts.projectCount).keys()].map(() => {
							return <ProjectInput />;
						})}
						<FaPlusCircle
							className="json__add-more"
							onClick={() =>
								setCounts((counts) => {
									return { ...counts, projectCount: counts.projectCount + 1 };
								})
							}
						/>
					</Bracket>
				</Bracket>
				<Button
					title="Save Changes"
					onClick={handleSubmit}
					customClass="admin__btn"
				></Button>
			</div>
		</div>
	);
};

export default Profile;
