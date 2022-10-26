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
      <button id="header-btn">
        <i className="arrow"></i>
      </button>
    </div>
  );
}
