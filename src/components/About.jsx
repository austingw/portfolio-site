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
            <p>My name is Austin and I'm a Frontend Dev!</p>
            <p>
              I've always had a passion for research, problem solving, and
              creative expression. From making Wordpress sites for family
              friends in middle school to soldering together guitar electronics,
              testing and troubleshooting are simply a way of life for me. Web
              development has given me the opportunity to use my natural
              inclinations and attributes to craft new experiences, conveint
              features, and responsive designs for both myself and clients.
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
