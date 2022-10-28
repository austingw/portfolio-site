import quiz from "../assets/quiz-app.gif";
import weather from "../assets/weather.gif";
import tenzies from "../assets/tenzies.gif";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="section-title">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio-item-reverse">
        <div className="project-display">
          <img src={quiz} className="project-img right-img" />
        </div>
        <div className="project-summary-left">
          <h3>Client: Greenbrier Church</h3>
          <p>
            <b>Summary:</b> A quiz game made with React that integrates the Open
            Quiz API
          </p>
          <div className="portfolio-btns">
            <a href="https://www.greenbrierchurch.com/">
              <button>View Site</button>
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-display">
          <img src={quiz} className="project-img left-img" />
        </div>
        <div className="project-summary-right">
          <h3>Project: Kitchen Sink Quiz</h3>
          <p>
            <b>Summary:</b> A quiz game made with React that integrates the Open
            Quiz API
          </p>
          <div className="portfolio-btns">
            <a href="https://austingw.com/quiz-app/">
              <button>Demo</button>
            </a>
            <a href="https://github.com/austingw/quiz-app">
              <button>View Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-item-reverse">
        <div className="project-display">
          <img src={tenzies} className="project-img right-img" />
        </div>
        <div className="project-summary-left">
          <h3>Project: Tenzies</h3>
          <p>
            <b>Summary:</b> A quiz game made with React that integrates the Open
            Quiz API
          </p>
          <div className="portfolio-btns">
            <a href="https://austingw.com/tenzies/">
              <button>Demo</button>
            </a>
            <a href="https://github.com/austingw/tenzies">
              <button>View Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-display">
          <img src={weather} className="project-img left-img" />
        </div>
        <div className="project-summary-right">
          <h3>Project: Raincheck</h3>
          <p>
            <b>Summary:</b> A quiz game made with React that integrates the Open
            Quiz API
          </p>
          <div className="portfolio-btns">
            <a href="https://austingw.com/raincheck/">
              <button>Demo</button>
            </a>
            <a href="https://github.com/austingw/raincheck">
              <button>View Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
