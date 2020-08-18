import React, { Component } from 'react';
import './work3D.css';
import { Card, CardDeck } from "react-bootstrap";

class Work3D extends Component {
  
  render() {
    
    return(
      <div className="work3D-page" id="work3D"><h1>3D Modeling and Animation</h1>
           <CardDeck className="deck1">
           <Card>
    <Card.Img variant="top" src={"https://user-images.githubusercontent.com/44556715/90456843-f6af0380-e0c7-11ea-86c5-20096f24363f.png"} />
    <Card.Body>
      <Card.Title>Chair 3D model for AR</Card.Title>
      <Card.Text>
        Chair 3D asset modeled from scratch based on photo reference for furniture company's AR feature, allowing customers to see the furniture with completely accurate size, textures, and colors in their room before purchasing.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        3D Model | Shade | UV unwrap | Bake 
      </Card.Text>
    </Card.Footer>
  </Card>
           <Card>
           <Card.Img variant="top" src={"https://user-images.githubusercontent.com/44556715/90457038-750ba580-e0c8-11ea-889b-40087c6dbdc4.png"} />
    <Card.Body>
      <Card.Title>Talent Show </Card.Title>
      <Card.Text>
        Animation created based on the prompt "One act in a talent show" -
        Character animation, modeling, rigging, UVs, props, materials, lighting all done in Maya. 
      </Card.Text>
      <a href="https://vimeo.com/user107311947/review/448719019/c05bef5d2b" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Animation | Character Design | Modeling 
      </Card.Text>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={"https://user-images.githubusercontent.com/44556715/90456909-1cd4a380-e0c8-11ea-9953-5100731ec972.png"} />
    <Card.Body>
      <Card.Title>Shiba Character Asset</Card.Title>
      <Card.Text>
        Shiba character asset created for the Talent Show animation.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        3D Model | Shade | UV unwrap | Bake
      </Card.Text>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
    )
  }
}

export default Work3D;