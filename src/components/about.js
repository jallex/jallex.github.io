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
          <h1>Hello! I'm Jackie, <br /> a creative technologist! </h1>
        </div>
        <h4>
          {" "}
          I work in computer graphics and production technology. If it moves, glows, or crashes spectacularly, I’m probably involved (legend has it with an unholy amount of tabs open and 3 lattes in hand :D)!
          <br />
          <br /> Outside of work, I love enjoying nature with friends, serenading my plants with silly songs, journaling, dancing at indie rock concerts, and exploring real-time generative projection art! :)
          <br /> Welcome to my site!
        </h4>
        <h4>
          {" "}
          My experience:
          <ul>
            <li>
              <b>Megalis VFX</b> <br />
              - Pipeline Technical Director <br />
            </li>
            <li>
              <b>Pixar Animation Studios</b> <br />
              - Dailies Lightspeed Rendering TD (<em>Inside Out 2</em>)<br />
              - Lightspeed Technical Director (<em>Elio</em>)<br />
              - Software Engineer - Applications Intern <br />
            </li>
            <li>
              <b>Disney Research Imagineering</b>
              <br />
              - Research & Development Co-op 
            </li>
            <li>
              <b>Electronic Arts</b>
              <br />
              - Technical Artist Intern
            </li>
            <li>
              <b>ILM, Lucasfilm</b>
              <br />
              - Core Pipeline Software Engineer Co-op 
            </li>
            <li>
              <b>Human Movement Neuroscience Lab</b>
              <br />
              - VR | AR | Motion Capture Technical Engineer 
            </li>
            <li>
              <b>Bank of America</b>
              <br />
              - Global Technology Analyst Intern 
            </li>
            {/* <li>
              <b>SIGGRAPH Conference</b>
              <br />
              - Immersive Pavilion Committee, Conference Apprentice 2025 <br />
              - Team Leader 2023 & 2022 <br />
              - Student Volunteer 2021
            </li> */}
          </ul>
        </h4>
      </div>
    </section>
  );
}

export default About;