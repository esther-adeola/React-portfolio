// import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects">
              <a href="https://esther-adeola.github.io/quiz/">
          <img id="quizgif" src="https://github.com/esther-adeola/challenge6/raw/master/assets/08-web-apis-challenge-demo.gif" alt="" />
        </a>

        <a href="https://esther-adeola.github.io/challenge7/">
          <img className="portfolio_photobox" src="src/images/dayPlanner.png" alt="" />
        </a>
        <a href="https://esther-adeola.github.io/horiseon/">
          <img className="portfolio_photobox" src="src/images/horiseon.png" alt="" />
        </a>
        <a href="https://anarab.github.io/MyRun">
          <img className="portfolio_photobox" src="src/images/MyRun.png" alt="" />
        </a>
        <a href="https://esther-adeola.github.io/weather-dashboard/">
          <img className="portfolio_photobox" src="src/images/weatherDashboard.png" alt="" />
        </a>
      </div>
    </div>
  );
}
