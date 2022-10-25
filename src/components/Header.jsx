import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div className="site-header">
      <h1 className="site-title">
        <Typewriter
          options={{
            strings: ["Austin G Williams<br/>Frontend Developer"],
            cursor: "_",
            pauseFor: 150000,
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <button className="header-btn">
        Learn More <br />
        <i className="arrow down"></i>
      </button>
    </div>
  );
}
