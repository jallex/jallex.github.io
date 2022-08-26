import React from 'react';
import './about.css';

function About() {
      return(
        <section className="aboutText"  id="about" alignItems="center">
            
            <div className = "me">
            <div className = "wrapper">
            <img className="background-img" alt="" src={"https://user-images.githubusercontent.com/44556715/90456642-7ee0d900-e0c7-11ea-819d-5522d9baf8d5.png"}/>
            <h1>Hello! My name is Jackie, and I'm a creative technologist. </h1>
            </div>
            <h4>I am an undergrad at Northeastern University studying Computer Science and Media Arts.</h4>
              <h4>A few topics that excite me are computer graphics programming, tools for animated film pipelines, and building interactive experiences! In my freetime I 
                enjoy drawing, playing guitar, and being outdoors.
              </h4>
              <h4> My experience: 
                <ul>
                <li><b>Pixar Animation Studios</b> summer 2022 (Software Engineer - Applications intern)</li>
                <li><b>Disney Research Imagineering</b> spring 2022 (R&D intern)</li>
                <li><b>SIGGRAPH</b> 2022 TL, 2021 SV</li>
                <li><b>Electronic Arts</b> summer 2021 (Tech Art intern)</li>
                <li><b>ILM, Lucasfilm</b>  spring 2021 (Core Pipeline Software Co-op)</li>
                <li><b>Human Movement Lab</b> all of 2020 (Motion Capture engineer)</li>
                <li><b>Bank of America</b> summer 2019 (React.js, Node.js, web development)</li>
                </ul> 
            </h4> 
            </div>
            </section>
      )
    }

export default About;
