import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaPlusCircle } from "react-icons/fa";
import { loadUser, updateUser } from "stores/userProfile";
import Bracket from "components/JsonInput/Bracket";
import Button from "components/Button";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import ProfileInput from "./ProfileInput";
import ProjectInput from "./ProjectInput";
import { formatDate } from "utils/helpers";

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const isLoggedIn = localStorage.getItem("loggedIn") === "true";

	const [counts, setCounts] = useState({
		experienceCount: 1,
		educationCount: 1,
		projectCount: 1,
	});

	const { profile, experiences, education, projects } = useSelector(
		(store) => store.user
	);

	const [updatedExperiences, setUpdatedExperiences] = useState(experiences);
	const [updatedEducation, setUpdatedEducation] = useState(education);
	const [updatedProjects, setUpdatedProjects] = useState(projects);
	const [formData, setFormData] = useState(profile || {});

	const { username } = profile || {};

	useEffect(() => {
		if (isLoggedIn) {
			if (Object.keys(profile).length === 0) {
				const token = localStorage.getItem("token");
				dispatch(loadUser({ token }));
			}else {
				setFormData(profile);
				setUpdatedExperiences(experiences);
				setUpdatedEducation(education);
				setUpdatedProjects(projects);
			}
		} else {
			navigate("/auth/login");
		}
	}, [isLoggedIn, navigate, dispatch, profile, experiences, education, projects]);

	const handleChange = useCallback(
		(e) => {
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
			});
		},
		[formData]
	);

	const handleExperiencesChange = useCallback(
		async (e, index) => {
			const list = [...updatedExperiences];
			if (index >= list.length) {
				const experienceTemplate = {
					company: "",
					position: "",
					startDate: "",
					endDate: "",
					designation: "",
					id: crypto.randomUUID(),
				};

				list.push(experienceTemplate);
			}
			const { name, value } = e.target;
			list[index][name] = e.target.type === "date" ? formatDate(value) : value;
			setUpdatedExperiences(list);
		},
		[updatedExperiences]
	);

	const handleEducationChange = useCallback(
		async (e, index) => {
			const list = [...updatedEducation];
			if (index >= list.length) {
				const educationTemplate = {
					school: "",
					degree: "",
					grade: "",
					startDate: "",
					endDate: "",
					id: crypto.randomUUID(),
				};

				list.push(educationTemplate);
			}
			const { name, value } = e.target;
			list[index][name] = e.target.type === "date" ? formatDate(value) : value;
			setUpdatedEducation(list);
		},
		[updatedEducation]
	);

	const handleProjectsChange = useCallback(
		async (e, index) => {
			const list = [...updatedProjects];
			if (index >= list.length) {
				const projectTemplate = {
					id: String,
					name: String,
					description: String,
					githubLink: String,
					websiteLink: String,
					skills: String,
				};

				list.push(projectTemplate);
			}
			const { name, value } = e.target;
			list[index][name] = value;
			setUpdatedProjects(list);
		},
		[updatedProjects]
	);

	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			dispatch(
				updateUser({
					...formData,
					experiences: updatedExperiences,
					education: updatedEducation,
					projects: updatedProjects,
				})
			);
		},
		[dispatch, formData, updatedEducation, updatedExperiences, updatedProjects]
	);

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
			<div className="admin__form">
				<Bracket
					objectName="User"
					objectSeparator="="
					openBracket={"{"}
					closeBracket={"}"}
				>
					<ProfileInput formData={formData} handleChange={handleChange} />

					<Bracket
						objectName="education"
						objectSeparator=":"
						openBracket={"["}
						closeBracket={"]"}
						isEndComma={true}
					>
						{education.map((edu, index) => {
							return (
								<EducationInput
									education={edu}
									handleEducationChange={(e) => handleEducationChange(e, index)}
								/>
							);
						})}
						{[...Array(counts.educationCount).keys()].map((_, ind) => {
							const index = ind + education.length;
							return (
								<EducationInput
									handleEducationChange={(e) => handleEducationChange(e, index)}
								/>
							);
						})}
						<FaPlusCircle
							className="json__add-more"
							onClick={() =>
								setCounts((counts) => {
									return {
										...counts,
										educationCount: counts.educationCount + 1,
									};
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
						{experiences.map((experience, index) => {
							return (
								<ExperienceInput
									{...{ experience, index }}
									handleExperiencesChange={(e) =>
										handleExperiencesChange(e, index)
									}
								/>
							);
						})}
						{[...Array(counts.experienceCount).keys()].map((_, ind) => {
							const index = ind + experiences.length;
							return (
								<ExperienceInput
									handleExperiencesChange={(e) =>
										handleExperiencesChange(e, index)
									}
								/>
							);
						})}
						<FaPlusCircle
							className="json__add-more"
							onClick={() =>
								setCounts((counts) => {
									return {
										...counts,
										experienceCount: counts.experienceCount + 1,
									};
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
						{projects.map((project, index) => {
							return (
								<ProjectInput
									{...{ project }}
									handleProjectsChange={(e) => handleProjectsChange(e, index)}
								/>
							);
						})}
						{[...Array(counts.projectCount).keys()].map((_, ind) => {
							const index = ind + projects.length;
							return (
								<ProjectInput
									handleProjectsChange={(e) => handleProjectsChange(e, index)}
								/>
							);
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
					customclassName="admin__btn"
				></Button>
			</div>
		</div>
	);
};

export default Profile;
