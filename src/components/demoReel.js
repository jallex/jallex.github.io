import React, { Component } from 'react';
import ReactPlayer from "react-player"
import './demoReel.css';

class DemoReel extends Component {
  render() {
    return(
      <div className="demo-reel-page" id="demo-reel"><h1>Demo Reel</h1>
      <ReactPlayer className='demo_player'
        url="https://vimeo.com/743299614"
        className='react-player'
        width='80%'
        height='80%'
        controls='true'
      />
    </div>
    )
  }
}

export default DemoReel;
