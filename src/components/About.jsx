import quiz from "../assets/quiz.png";

export default function About() {
  return (
    <div className="about">
      <div>
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-wrapper">
          <img src={quiz} />
          <div className="about-content">
            <p>👋 Hi, I’m Austin Williams, a Frontend Developer!</p>
            <p>
              For as long as I can remember, I've possessed a passion for
              research, problem solving, and creative expression. In middle
              school I taught myself how to build websites with Wordpress. Last
              weekend I spent hours learning how to solder guitar electronics! I
              love web development because it has granted me the fulfilling
              opportunity to use my inclinations to craft new experiences,
              conveint features, and responsive designs for both myself and
              clients.
            </p>
            <p>
              Technologies I use include React, Javascript, CSS, SASS,
              Bootstrap, Vite, and Webpack, but I'm always excited to learn
              something new.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
