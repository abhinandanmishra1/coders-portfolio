import Bracket from 'common/components/JsonInput/Bracket'
import JsonInput from 'common/components/JsonInput/JsonInput'
import React from 'react'

const ExperienceInput = ({experience}) => {
  return (
    <Bracket openBracket={"{"} closeBracket={"}"} isEndComma={true}>
			<JsonInput
					onChange={() => {}}
				  type="text"
					fieldName="designation"
					defaultValue={experience?.designation}
			/>
			<JsonInput
					onChange={() => {}}
				  type="text"
					fieldName="company"
					defaultValue={experience?.company}
			/>
			<JsonInput
					onChange={() => {}}
				  type="date"
					fieldName="startDate"
					defaultValue={experience?.startDate}
			/>
			<JsonInput
					onChange={() => {}}
				  type="date"
					fieldName="endDate"
					defaultValue={experience?.endDate}
			/>
			<JsonInput
					onChange={() => {}}
				  type="text"
					fieldName="learnings"
					defaultValue={experience?.learnings}
			/>
		</Bracket>
  )
}

export default ExperienceInput