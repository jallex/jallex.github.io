import React, { Component } from 'react';
import './artwork.css';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"


class Tiles extends React.Component {
  render() {
      // Create tile for each item in data array
      // Pass data to each tile and assign a key
      return (
          <div className="tiles">
              {this.props.data.map((data) => {
                  return <Tile data={data} key={data.id} />
              })}
          </div>
      );
  }
}

class Tile extends React.Component {
  constructor(props) {
          super(props);
          this.state = {
              open: false,
              mouseOver: false
          };
          // Bind properties to class instance
          this._clickHandler = this._clickHandler.bind(this);
          this._mouseEnter = this._mouseEnter.bind(this);
          this._mouseLeave = this._mouseLeave.bind(this);
      }
      // Event handlers to modify state values
  _mouseEnter(e) {
      e.preventDefault();
      if (this.state.mouseOver === false) {
          console.log(this.props.data.name);
          this.setState({
              mouseOver: true
          })
      }
  }
  _mouseLeave(e) {
      e.preventDefault();
      if (this.state.mouseOver === true) {
          this.setState({
              mouseOver: false
          })
      }
  }
  _clickHandler(e) {
      e.preventDefault();
      if (this.state.open === false) {
        this.setState({
          open: true
      });
      } else {
          this.setState({
              open: false
          });
      }
  }

  openPopupbox(img) {
    const content = (
      <div>
       <img className="modal-img" alt="" src={img} />
      </div>
    )
    PopupboxManager.open({ content })
    this.setState({
      open: false
  });
  }

  render() {

    let tileStyle = {};
    // When tile clicked
        tileStyle = {
          width: 'auto',
          height: '100%'
        };


      return (
          <div className="tile">
            {this.state.open && 
              <img
                  onMouseEnter={this._mouseEnter}
                  onMouseLeave={this._mouseLeave}
                  src={this.props.data.image}
                  onClick={this._clickHandler}
                  alt={this.props.data.name}
                  style={tileStyle}
              /> && this.openPopupbox(this.props.data.image)}
            {!this.state.open &&  <img
                  onMouseEnter={this._mouseEnter}
                  onMouseLeave={this._mouseLeave}
                  src={this.props.data.image}
                  onClick={this._clickHandler}
                  alt={this.props.data.name}
                  style={tileStyle}
            /> }
          </div>
      );
  }
}

class Thing extends React.Component {
  render() {
      return (
          <Tiles data={this.props.data} />
      );
  }
}

class Artwork extends Component {
  render() {
    const popupboxConfig = {
      titleBar: {
        enable: true,
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
    const data = [ 
      {
        id: 22,
        name: "Demon concert",
        image: "/images_artwork/demon_girls.png"
      },
      {
        id: 19,
        name: "Gravediggers",
        image: "/images_artwork/gravediggers.png"
      },
      {
        id: 21,
        name: "Grad Cap",
        image: "/images_artwork/grad_cap.jpg"
      },
      {
        id: 23,
        name: "doodle",
        image: "/images_artwork/doodle.jpg"
      },
      {
        id: 6,
        name: "Water Hand",
        image: "/images_artwork/hand_water.jpeg"
      }, 
    {
      id: 1,
      name: "Ballet",
      image: "/images_artwork/ballet.png"
    },
     {
      id: 5,
      name: "Fire Hand",
      image: "/images_artwork/hand_flame.jpeg"
    }, 
    {
      id: 2,
      name: "Forest",
      image: "/images_artwork/flower_girl.jpg"
    },
    {
      id: 20,
      name: "Moth wizard",
      image: "/images_artwork/moth_wizard.jpg"
    },
    {
      id: 4,
      name: "Dog",
      image: "/images_artwork/boston_terrier.jpeg"
    },
    {
      id: 7,
      name: "Earth",
      image: "/images_artwork/hand_earth.jpeg"
    }, 
    {
      id: 22,
      name: "Skyscraper",
      image: "/images_artwork/skyscrapers.jpeg"
    },
    {
      id: 22,
      name: "Portrait2",
      image: "/images_artwork/portrait2.jpeg"
    },
    {
      id: 21,
      name: "Portrait1",
      image: "/images_artwork/portrait1.jpeg"
    },
    {
      id: 8,
      name: "Wind",
      image: "/images_artwork/hand_wind.jpeg"
    }, 
    {
      id: 9,
      name: "Eye fire",
      image: "/images_artwork/eye_fire.jpeg"
    }, {
      id: 10,
      name: "Eye water",
      image: "/images_artwork/eye_water.jpeg"
    }, 
    {
      id: 23,
      name: "Guitar",
      image: "/images_artwork/guitar.jpg"
    },
    {
      id: 3,
      name: "Bottles",
      image: "/images_artwork/bottles.jpg"
    },
    {
      id: 12,
      name: "Watch",
      image: "/images_artwork/watch.jpeg"
    }, 
    /* 
    {
      id: 17,
      name: "Skeleton",
      image: "https://user-images.githubusercontent.com/44556715/90457291-198de780-e0c9-11ea-8d31-01398b290543.jpg"
    },
    {
      id: 16,
      name: "Eggs",
      image: "https://user-images.githubusercontent.com/44556715/90457290-18f55100-e0c9-11ea-9478-c803d83f7b43.JPG"
    },
  */ 
  {
      id: 15,
      name: "Hand animated",
      image: "/images_artwork/hand_animated.gif"
    },  {
      id: 18,
      name: "Hand pencil",
      image: "/images_artwork/hand_blocked.jpeg"
    }];
    return(
      <div className="artwork-page" id="artwork"><h1>Artwork and Illustration</h1>
      <Thing data = {data} />
      <PopupboxContainer { ...popupboxConfig } />
      </div>
    )
  }
}

export default Artwork;
