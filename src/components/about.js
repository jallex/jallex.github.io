import React from "react";
import "./about.css";

function About() {
  return (
    <section className="aboutText" id="about" alignItems="center">
      <div className="me">
        <div className="wrapper">
          <img
            className="background-img"
            alt=""
            src={
              "https://user-images.githubusercontent.com/44556715/90456642-7ee0d900-e0c7-11ea-819d-5522d9baf8d5.png"
            }
          />
          <h1>Hello! My name is Jackie, and I'm a creative technologist! </h1>
        </div>
        <h4>
          {" "}
          I specialize in computer graphics, production technology, and
          optimization. I love problem solving and engineering beauty from bits
          and bytes.
          <br /> My hobbies are hiking, playing bass, doodling, and attending indie rock concerts :)
        </h4>
        <h4>
          {" "}
          My experience:
          <ul>
            <li>
              <b>Pixar Animation Studios</b> <br />
              February 2023 - present
              (Lightspeed Technical Director Resident)
              <br />
              Summer 2022 (Software Engineer - Applications intern)
            </li>
            <li>
              <b>Disney Research Imagineering</b>
              <br />
              Spring 2022 (R&D intern)
            </li>
            <li>
              <b>Electronic Arts</b>
              <br />
              Summer 2021 (Tech Art intern)
            </li>
            <li>
              <b>ILM, Lucasfilm</b>
              <br />
              Spring 2021 (Core Pipeline Software Co-op)
            </li>
            <li>
              <b>Human Movement Lab</b>
              <br />
              All of 2020 (Motion Capture engineer)
            </li>
            <li>
              <b>Bank of America</b>
              <br />
              Summer 2019 (React.js, Node.js, web development)
            </li>
            <li>
              <b>SIGGRAPH</b>
              <br />
              2023 + 2022 Team Leader, 2021 Student Volunteer
            </li>
          </ul>
        </h4>
      </div>
    </section>
  );
}

export default About;
