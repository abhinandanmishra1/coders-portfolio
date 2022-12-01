import React from "react";

const HrSectionHeader = ({ title }) => {
  if (!title) return null;
  return (
    <header class="hr-section-card__header">
      <div
        class={`hr-section-card__header--${title
          .split(" ")
          .join("-")
          .toLowerCase()}`}
      ></div>
      <h2 class="hr-section-card__heading">{title}</h2>
    </header>
  );
};

export default HrSectionHeader;
