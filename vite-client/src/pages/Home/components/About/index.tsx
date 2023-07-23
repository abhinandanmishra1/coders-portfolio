import { useEffect, useState } from "react";
import LeetcodeUiImage from "assets/images/lc.png";
import { steps } from "./About.constants";

export const About = () => {
  const [url, setUrl] = useState(LeetcodeUiImage);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextStep = (activeStep + 1) % 5;
      setActiveStep(nextStep);
      setUrl(steps[nextStep].imgUrl);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [activeStep]);

  return (
    <div>
      <div>
        <h1>
          What features <span>CodersPortfolio</span> provides?
        </h1>
      </div>
      <div>
        <div>
          <img src={url} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};
