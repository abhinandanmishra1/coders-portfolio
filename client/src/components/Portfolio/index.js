import Main from "./Main";
import BgImage from "assets/images/bg.jpg";

const Portfolio = () => {
	return (
		<div className="container">
			<img
				className="background"
				alt=""
				src={BgImage}
			/>
			{[...Array(100)].map((_, i) => (
				<div key={i} className="circle-container">
					<div className="circle"></div>
				</div>
			))}
      <Main />
		</div>
	);
};

export default Portfolio;
