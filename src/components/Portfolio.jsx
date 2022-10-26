import quiz from "../assets/quiz.png";

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
            <button>Demo</button>
            <button>View Code</button>
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-display">
          <img src={quiz} className="project-img left-img" />
        </div>
        <div className="project-summary-right">
          <h3>Project: Quiz App</h3>
          <p>
            <b>Summary:</b> A quiz game made with React that integrates the Open
            Quiz API
          </p>
          <div className="portfolio-btns">
            <button>Demo</button>
            <button>View Code</button>
          </div>
        </div>
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
            <button>Demo</button>
            <button>View Code</button>
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-display">
          <img src={quiz} className="project-img left-img" />
        </div>
        <div className="project-summary-right">
          <h3>Project: Quiz App</h3>
          <p>
            <b>Summary:</b> A quiz game made with React that integrates the Open
            Quiz API
          </p>
          <div className="portfolio-btns">
            <button>Demo</button>
            <button>View Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}
