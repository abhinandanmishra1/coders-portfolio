import React from "react";

const HrSectionHeader = ({ title }) => {
  if (!title) return null;
  return (
    <header className="hr-section-card__header">
      <div
        className={`hr-section-card__header--${title
          .split(" ")
          .join("-")
          .toLowerCase()}`}
      ></div>
      <h2 className="hr-section-card__heading">{title}</h2>
    </header>
  );
};

export default HrSectionHeader;
