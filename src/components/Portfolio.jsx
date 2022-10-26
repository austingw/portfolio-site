import quiz from "../assets/quiz.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-item">
        <div className="project-summary">
          <h3>Project: Quiz App</h3>
          <b>Summary</b>
          <p>A quiz game made with React that integrates the Open Quiz API</p>
          <button>Demo</button>
          <button>Code</button>
        </div>
        <div className="project-display">
          <img src={quiz} className="project-img right-img" />
        </div>
      </div>
      <div className="portfolio-item-reverse"></div>
    </div>
  );
}
