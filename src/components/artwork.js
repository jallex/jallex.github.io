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
        image: "https://user-images.githubusercontent.com/44556715/108859354-21b86980-75bb-11eb-9f57-ea6c7f946731.png"
      },
      {
        id: 19,
        name: "Gravediggers",
        image: "https://user-images.githubusercontent.com/44556715/108859790-94c1e000-75bb-11eb-9076-ab1c905272d2.png"
      },
      {
        id: 21,
        name: "Grad Cap",
        image: "https://github-production-user-asset-6210df.s3.amazonaws.com/44556715/444304657-bfb4c1de-c604-44d4-b6da-f9036d266a22.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250515T214728Z&X-Amz-Expires=300&X-Amz-Signature=9abdc2b8ff5ec8de06faee6f496615c0e2dadd6c7c739353a81b2d28331ffd57&X-Amz-SignedHeaders=host"
      },
      {
        id: 6,
        name: "Water",
        image: "https://user-images.githubusercontent.com/44556715/90457274-14309d00-e0c9-11ea-976f-c7e58748c066.JPG"
      }, 
    {
      id: 1,
      name: "Ballet",
      image: "https://user-images.githubusercontent.com/44556715/90457265-1266d980-e0c9-11ea-896a-1ad1f15c09d3.png"
    },
     {
      id: 5,
      name: "Fire",
      image: "https://user-images.githubusercontent.com/44556715/90457272-14309d00-e0c9-11ea-8611-9a53a58086e7.JPG"
    }, 
    {
      id: 2,
      name: "Forest",
      image: "https://user-images.githubusercontent.com/44556715/90457269-13980680-e0c9-11ea-8a00-366dae248570.jpg"
    },
    {
      id: 20,
      name: "Moth wizard",
      image: "https://github-production-user-asset-6210df.s3.amazonaws.com/44556715/444304993-ede6afdf-f7ee-4fb9-b185-7fef0ad30a36.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250515T214902Z&X-Amz-Expires=300&X-Amz-Signature=14ebe8c536be88b43f8e37e4e4eac076278f4e00653bd0817abb5df0adf6d224&X-Amz-SignedHeaders=host"
    },
    {
      id: 4,
      name: "Dog",
      image: "https://user-images.githubusercontent.com/44556715/90457271-13980680-e0c9-11ea-9b35-f6cb875ac530.JPG"
    },
    {
      id: 7,
      name: "Earth",
      image: "https://user-images.githubusercontent.com/44556715/90457276-14309d00-e0c9-11ea-9bec-f8ed95268745.JPG"
    }, 
    {
      id: 22,
      name: "Skyscraper",
      image: "https://user-images.githubusercontent.com/44556715/131848235-b5a6b0af-7f76-45c2-926c-bd560b10e40d.jpeg"
    },
    {
      id: 22,
      name: "Portrait2",
      image: "https://user-images.githubusercontent.com/44556715/131847707-9a512fa0-e1e8-4c66-8067-4595bd0b0367.jpeg"
    },
    {
      id: 21,
      name: "Portrait1",
      image: "https://user-images.githubusercontent.com/44556715/131847256-66226c51-1b74-4d0e-a05a-f9f0b87a1240.jpeg"
    },
    {
      id: 8,
      name: "Wind",
      image:"https://user-images.githubusercontent.com/44556715/90457277-14c93380-e0c9-11ea-8a59-476ec3ef5116.JPG"
    }, 
    {
      id: 9,
      name: "Eye fire",
      image: "https://user-images.githubusercontent.com/44556715/90457278-14c93380-e0c9-11ea-85c6-26cd6da189e5.JPG"
    }, {
      id: 10,
      name: "Eye water",
      image: "https://user-images.githubusercontent.com/44556715/90457281-1561ca00-e0c9-11ea-9a79-a1cb6bb99a5a.JPG"
    }, 
    {
      id: 23,
      name: "Guitar",
      image: "https://github-production-user-asset-6210df.s3.amazonaws.com/44556715/444306654-2be93c0f-4262-4b84-a815-65e76cb62ff5.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250515T215548Z&X-Amz-Expires=300&X-Amz-Signature=f6ca728eb79569a30366df6af154ea868d9651a72753b727a20ee956230bbd62&X-Amz-SignedHeaders=host"
    },
    {
      id: 3,
      name: "Bottles",
      image: "https://user-images.githubusercontent.com/44556715/90457270-13980680-e0c9-11ea-8eb7-6a731c506df7.jpg"
    },
    {
      id: 12,
      name: "Watch",
      image: "https://user-images.githubusercontent.com/44556715/90457282-15fa6080-e0c9-11ea-9480-dcb243ce4c19.jpeg"
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
      image: "https://user-images.githubusercontent.com/44556715/90457285-1692f700-e0c9-11ea-900b-24937e305571.gif"
    },  {
      id: 18,
      name: "Hand pencil",
      image: "https://user-images.githubusercontent.com/44556715/90457293-198de780-e0c9-11ea-8db8-e5873807ab90.JPG"
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
