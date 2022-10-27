import {
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Element name="home">
        <Header />
      </Element>
      <Navbar />
      <Element name="about">
        <About />
      </Element>
      <Element name="portfolio">
        <Portfolio />{" "}
      </Element>
      <Element name="contact">
        <Contact />{" "}
      </Element>
      <Footer />
    </div>
  );
}

export default App;
