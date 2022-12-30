import Bracket from "common/components/JsonInput/Bracket";
import JsonInput from "common/components/JsonInput/JsonInput";
import React from "react";

const EducationInput = ({ education }) => {
	return (
		<Bracket openBracket={"{"} closeBracket={"}"} isEndComma={true}>
			<JsonInput
				onChange={() => {}}
				type="text"
				fieldName="school"
				defaultValue={education?.school}
			/>
			<JsonInput
				onChange={() => {}}
				type="text"
				fieldName="degree"
				defaultValue={education?.degree}
			/>
			<JsonInput
				onChange={() => {}}
				type="text"
				fieldName="grade"
				defaultValue={education?.grade}
			/>
			<JsonInput
				onChange={() => {}}
				type="date"
				fieldName="startDate"
				defaultValue={education?.startDate}
			/>
			<JsonInput
				onChange={() => {}}
				type="date"
				fieldName="endDate"
				defaultValue={education?.endDate}
			/>
		</Bracket>
	);
};

export default EducationInput;
