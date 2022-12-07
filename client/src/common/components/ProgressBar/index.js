import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ bgcolor, completed, showLabel = false }) => {
  const containerStyles = {
    height: 5,
    width: '100%',
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles} className="progressBar-container">
      <div style={fillerStyles} className="progressBar-filler">
        {
            showLabel && (
                <span style={labelStyles} className="progressBar-label">{`${completed}%`}</span>
            )
        }
      </div>
    </div>
  );
};

export default ProgressBar;