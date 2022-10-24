import { useState } from "react";
import Typewriter from "typewriter-effect";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
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
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
