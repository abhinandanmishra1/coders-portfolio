import Bracket from "components/JsonInput/Bracket";
import JsonInput from "components/JsonInput/JsonInput";
import React from "react";
import { formatDate } from "utils/helpers";

const EducationInput = ({ education, handleEducationChange }) => {
	return (
		<Bracket openBracket={"{"} closeBracket={"}"} isEndComma={true}>
			<JsonInput
				onChange={handleEducationChange}
				type="text"
				fieldName="school"
				defaultValue={education?.school}
			/>
			<JsonInput
				onChange={handleEducationChange}
				type="text"
				fieldName="degree"
				defaultValue={education?.degree}
			/>
			<JsonInput
				onChange={handleEducationChange}
				type="text"
				fieldName="grade"
				defaultValue={education?.grade}
			/>
			<JsonInput
				onChange={handleEducationChange}
				type="date"
				fieldName="startDate"
				defaultValue={formatDate(education?.startDate)}
			/>
			<JsonInput
				onChange={handleEducationChange}
				type="date"
				fieldName="endDate"
				defaultValue={formatDate(education?.endDate)}
			/>
		</Bracket>
	);
};

export default EducationInput;
