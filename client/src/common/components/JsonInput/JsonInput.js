import React from "react";

const JsonInput = ({ type, fieldName, defaultValue, onChange}) => {
	return (
		<div className="json__input">
			<span className="json__key">{fieldName} : </span>{" "}
			<input onChange={onChange} name={fieldName} id={fieldName} type={type} className="json__value" defaultValue={defaultValue} />
			<span className="json__comma">,</span>
		</div>
	);
};

export default JsonInput;
