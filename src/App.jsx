import { useState } from "react";
import Typewriter from "typewriter-effect";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div className="site-header">
        <h1 className="site-title">
          <Typewriter
            options={{
              strings: ["Austin Williams<br/>Frontend Developer"],
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
    </div>
  );
}

export default App;
