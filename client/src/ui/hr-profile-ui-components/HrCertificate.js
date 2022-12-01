import React from "react";

const HrCertificate = ({title, level, url}) => {
  return (
      <a
        className="hr-certificate"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="hr-certificate__container">
          <div className="hr-certificate--folded-corner"></div>
          <div className="hr-certificate__content">
            <h2 className="hr-certificate__heading">
                {title} ({level})
            </h2>
            <span
              className="hr-certificate__heading"
              aria-hidden="true"
            >
              <strong>Verified</strong>
            </span>
          </div>
        </div>
      </a>
  );
};

export default HrCertificate;
