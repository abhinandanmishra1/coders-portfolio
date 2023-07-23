import { About } from "./components/About";
import { Working } from "./components/Working";

export const Home = () => {
  return (
    <div className="main">
      <div className="home">
        <div className="home__intro-title">
          <h1>
            Platform for{" "}
            <span>
              {"<"}coders {"/>"}
            </span>{" "}
            to showcase their <span>coding experience</span>
          </h1>
        </div>
        <p className="home__intro-subtitle">
          {" "}
          This application integrates with leading coding platforms, such as
          GitHub, LeetCode, Codechef, Codeforces, and Hackerrank
          <span>
            , to fetch your data and create a stunning page that showcases your
            achievements across all these platforms
          </span>
        </p>
        <div className="home__create-portfolio">
          <div className="home__create-portfolio--input-container">
            <span className="home__create-portfolio--input-text">
              potfolio.render.com/
            </span>
            <input
              className="home__create-portfolio--input"
              type="text"
              placeholder="yourUsername"
            />
          </div>
          <div className="home__create-portfolio--btn">Create Portfolio</div>
        </div>
      </div>
      <About />
      <Working />
    </div>
  );
};
