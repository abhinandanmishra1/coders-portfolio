import Bracket from "common/components/JsonInput/Bracket";
import JsonInput from "common/components/JsonInput/JsonInput";
import React from "react";

const ProjectInput = ({ project }) => {
	return (
		<Bracket openBracket={"{"} closeBracket={"}"} isEndComma={true}>
			<JsonInput
				onChange={() => {}}
				type="text"
				fieldName="name"
				defaultValue={project?.name}
			/>
			<JsonInput
				onChange={() => {}}
				type="text"
				fieldName="description"
				defaultValue={project?.description}
			/>
			<JsonInput
				onChange={() => {}}
				type="url"
				fieldName="githubLink"
				defaultValue={project?.githubLink}
			/>
			<JsonInput
				onChange={() => {}}
				type="url"
				fieldName="websiteLink"
				defaultValue={project?.websiteLink}
			/>
			<JsonInput
				onChange={() => {}}
				type="text"
				fieldName="skills"
				defaultValue={project?.skills}
			/>
		</Bracket>
	);
};

export default ProjectInput;
