import Typewriter from "typewriter-effect";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

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
        <Link
          to="about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-30}
          duration={500}
          aria-label="Scrolls down the page"
        >
          {" "}
          <i className="arrow" />
        </Link>
      </button>
    </div>
  );
}
