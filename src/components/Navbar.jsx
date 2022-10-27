import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-30}
        duration={500}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-30}
        duration={500}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-30}
        duration={500}
      >
        Portfolio
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-30}
        duration={500}
      >
        Connect
      </Link>
    </div>
  );
}
