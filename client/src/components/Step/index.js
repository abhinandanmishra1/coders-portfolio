import React, { useEffect, useState } from "react";
import "./index.scss";

const Step = ({ title, description, active, timeInSeconds = 5 }) => {
	const [progress, setProgress] = useState(active ? 100 : 0);
  // we have to cover 100% in timeInSeconds
  // 1% is covered in timeInSeconds/100
  // 0.1% is covered in timeInSeconds/1000
  useEffect(() => {
    if(active){
      setProgress(100);
    }else{
      setProgress(0);
    }
  }, [active]);
  
	useEffect(() => {
		const intervalId = timeInSeconds>0 && progress>0 && setInterval(() => {
			setProgress((prevProgress) => prevProgress - 0.1);
		}, timeInSeconds);

		return () => clearInterval(intervalId);
	}, [progress, timeInSeconds]);

	return (
		<div className={`step ${active && "step--active"}`}>
			<h1 className="step__title">{title}</h1>
			{active && (
				<>
					<p className="step__description">{description}</p>
					<div
						className="step__progress"
						style={{
							width: `${progress}%`,
						}}
					></div>
				</>
			)}
		</div>
	);
};

export default Step;
