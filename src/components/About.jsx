import me from "../assets/site-selfie.png";

export default function About() {
  return (
    <div className="about">
      <div>
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-wrapper">
          <img src={me} alt="A picture of me" />
          <div className="about-content">
            <p>👋 Hi, I’m Austin Williams, a Frontend Developer! </p>
            <p>
              For as long as I can remember, I've had a passion for creative
              expression, research, and problem solving. In middle school, I
              taught myself how to build and deploy websites with Wordpress.
              Last weekend I spent hours learning how to solder guitar
              electronics! I love web development because it has allowed me the
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
