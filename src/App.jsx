import { useState } from "react";
import github from "./assets/github.svg";
import Typewriter from "typewriter-effect";

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
      <p>Here's an example of my intro</p>
      <a href="">Link</a>
      <i class="devicon-github-original"></i>
    </div>
  );
}

export default App;
