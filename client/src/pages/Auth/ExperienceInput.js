import Bracket from 'components/JsonInput/Bracket'
import JsonInput from 'components/JsonInput/JsonInput'
import React from 'react'
import { formatDate } from 'utils/helpers';

const ExperienceInput = ({experience, index, handleExperiencesChange}) => {
  return (
    <Bracket openBracket={"{"} closeBracket={"}"} isEndComma={true}>
			<JsonInput
					onChange={handleExperiencesChange}
				  type="text"
					fieldName="designation"
					defaultValue={experience?.designation}
			/>
			<JsonInput
					onChange={handleExperiencesChange}
				  type="text"
					fieldName="company"
					defaultValue={experience?.company}
			/>
			<JsonInput
					onChange={handleExperiencesChange}
				  type="date"
					fieldName="startDate"
					defaultValue={formatDate(experience?.startDate)}
			/>
			<JsonInput
					onChange={handleExperiencesChange}
				  type="date"
					fieldName="endDate"
					defaultValue={formatDate(experience?.endDate)}
			/>
			<JsonInput
					onChange={handleExperiencesChange}
				  type="text"
					fieldName="learnings"
					defaultValue={experience?.learnings}
			/>
		</Bracket>
  )
}

export default ExperienceInput