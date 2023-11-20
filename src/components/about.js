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
              - Inside Out 2, Dailies Lightspeed Rendering TD <br />
              - Elio, Lightspeed Technical Director <br />
              (February 2023 - present)
              <br />
              - Software Engineer - Applications intern <br />
              (Summer 2022)
            </li>
            <li>
              <b>Disney Research Imagineering</b>
              <br />
              - R&D intern (Spring 2022)
            </li>
            <li>
              <b>Electronic Arts</b>
              <br />
              - Tech Art intern (Summer 2021)
            </li>
            <li>
              <b>ILM, Lucasfilm</b>
              <br />
              - Core Pipeline Software Co-op (Spring 2021)
            </li>
            <li>
              <b>Human Movement Lab</b>
              <br />
              - Motion Capture Engineer (All of 2020)
            </li>
            <li>
              <b>Bank of America</b>
              <br />
              - ReactJS Web App Developer intern (Summer 2019)
            </li>
            <li>
              <b>SIGGRAPH Conference</b>
              <br />
              - Team Leader 2023 & 2022 <br />
              - Student Volunteer 2021
            </li>
          </ul>
        </h4>
      </div>
    </section>
  );
}

export default About;
