import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import About from './components/about';
import DemoReel from './components/demoReel';
import Code from './components/code';
import Work3D from './components/work3D';
import Artwork from './components/artwork';
import Contact from './components/contact';
import Home from './components/home';
import Navbarg from './components/navbar';
import NavbarMobile from './components/navbar-mobile';
import Fade from 'react-reveal/Fade';

function detectMob() {
  return ( ( window.innerWidth <=  (.3*(window.innerWidth))) );
}

const App = () => {
  if(!detectMob){
    return (
    <div className="content">
      <div className="navbar">
        <Navbarg/>
        </div><div className = "sections">
  <div className="div1"> <Home/> </div>
<div style=
  {{width: '100%', margin: 0}} className="div2"><Fade><About/></Fade>
      </div> 
      <div style=
  {{width: '100%', margin: 0}} className="div3">
  <DemoReel/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div4">
      <Code/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div5">
      <Work3D/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div6">
      <Artwork/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div7">
      <Contact/>
      </div>
      </div>
</div> 
  )
    }
    else{
      return(
<div className="content">
      <div className="navbar">
        <NavbarMobile/>
        </div><div className = "sections">
  <div className="div1"> <Home/> </div>
<div style=
  {{width: '100%', margin: 0}} className="div2"><Fade><About/></Fade>
      </div> 
      <div style=
  {{width: '100%', margin: 0}} className="div3">
  <DemoReel/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div4">
      <Code/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div5">
      <Work3D/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div6">
      <Artwork/>
      </div>
      <div style=
  {{width: '100%', margin: 0}} className="div7">
      <Contact/>
      </div>
      </div>
</div> 
      );
    }
};

export default App;