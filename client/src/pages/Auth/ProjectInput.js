import Bracket from "components/JsonInput/Bracket";
import JsonInput from "components/JsonInput/JsonInput";
import React from "react";

const ProjectInput = ({ project, handleProjectsChange }) => {
	return (
		<Bracket openBracket={"{"} closeBracket={"}"} isEndComma={true}>
			<JsonInput
				onChange={handleProjectsChange}
				type="text"
				fieldName="name"
				defaultValue={project?.name}
			/>
			<JsonInput
				onChange={handleProjectsChange}
				type="text"
				fieldName="description"
				defaultValue={project?.description}
			/>
			<JsonInput
				onChange={handleProjectsChange}
				type="url"
				fieldName="githubLink"
				defaultValue={project?.githubLink}
			/>
			<JsonInput
				onChange={handleProjectsChange}
				type="url"
				fieldName="websiteLink"
				defaultValue={project?.websiteLink}
			/>
			<JsonInput
				onChange={handleProjectsChange}
				type="text"
				fieldName="skills"
				defaultValue={project?.skills}
			/>
		</Bracket>
	);
};

export default ProjectInput;
