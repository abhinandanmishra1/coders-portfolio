import React, { useEffect, useState } from "react";
import CodechefUiImage from "assets/images/cc.png";
import CodeforcesUiImage from "assets/images/cf.png";
import HackerRankUiImage from "assets/images/hr.png";
import GithubUiImage from "assets/images/gh.png";
import LeetcodeUiImage from "assets/images/lc.png";
import Step from "components/Step";


const About = () => {
	const steps = [
		{
			title: 'Leetcode Profile',
			description: 'Instantly clone and view your Leetcode profile in a beautiful and easy-to-use interface with just a few clicks.',
			imgUrl: LeetcodeUiImage,
		},
		{
			title: 'Codeforces Profile',
			description: 'Experience your Codeforces profile in a whole new way with a sleek and modern user interface that makes your data more accessible and engaging.',
			imgUrl: CodeforcesUiImage,
		},
		{
			title: 'Codechef Profile',
			description: 'Easily view and explore your Codechef profile data with our streamlined and user-friendly design, making it simple to track your progress and achievements.',
			imgUrl: CodechefUiImage,
		},
		{
			title: 'Hackerrank Profile',
			description: 'Get a complete clone of your Hackerrank profile in a visually stunning layout, allowing you to easily share your achievements and progress with others.',
			imgUrl: HackerRankUiImage,
		},
		{
			title: 'Github Profile',
			description: 'See your Github profile in a brand new light with our custom-designed interface that showcases your data and projects in an elegant and modern way.',
			imgUrl: GithubUiImage
		}
	];
	

	const [url, setUrl] = useState(LeetcodeUiImage);
	const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
			const nextStep = (activeStep + 1)%5;
      setActiveStep(nextStep);
			setUrl(steps[nextStep].imgUrl);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [activeStep, steps]);

	return (
		<div className="about">
			<div className="about__title">
				<h1>
					What features {" "}
					<span>
						CodersPortfolio
					</span>{" "}
					provides?
				</h1>
			</div>
			<div className="about__description">
				<div class="about__image">
					<img src={url} alt="" />
				</div>
				<div class="about__steps">
						{
							steps.map((step, index) => <Step {...{...step, active: (activeStep === index)}} />)
						}
				</div>
			</div>
		</div>
	);
};

export default About;
