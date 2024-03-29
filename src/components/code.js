import React, { Component } from 'react';
import { Card, CardDeck, Carousel } from "react-bootstrap";
import './code.css';

class Code extends Component {

state = {
  showMessageSpreadsheet: false,
  showMessageAutoLabel: false
}
onButtonClickHandler(box){
if(box === "spreadsheet"){
 this.setState({showMessageSpreadsheet: !this.state.showMessageSpreadsheet});
}
if(box === "autolabel"){
  this.setState({showMessageAutoLabel: !this.state.showMessageAutoLabel});
}
}

displayText(showMore){
  if(showMore === true){
    return "Show less";
  }
  else {
    return "Show more";
  }
}
render() {
    return(
      <div className="code-page" id="code">
        <h1>Coding Projects</h1>
     <CardDeck className="deck1">
     <Card>
     <Carousel interval = "100000000000000">
     <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/139949692-78640de6-499b-4761-885d-53c973e87f24.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/123519445-54fa2a80-d679-11eb-8d1f-c70d2ff221fa.gif"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/123521303-d5258d80-d683-11eb-94de-1727197e6971.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/123521634-ecfe1100-d685-11eb-837a-c51414b56ede.png"}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>3D Object Reader and Mesh Decimation</Card.Title>
      <Card.Text>
        <ul>
          <li>Reads and displays .obj files created using C++, SDL, and OpenGL.</li>
          <li>Mesh Decimation implemented using the Edge Collapse algorithm, and decimates mesh by a user specified percentage.</li>
          <li>Implemented a greedy version of the algorithm to optimize reducing dense meshes.</li>
          <li>Built off of this project to create a Progressive Mesh and LOD system.</li>
        </ul>
        <a href="https://github.com/jallex/Mesh-Decimation" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
    Graphics Programming | C++ | OpenGL
      </Card.Text>
    </Card.Footer>
  </Card>

  <Card>
  <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90458262-ebf66d80-e0cb-11ea-8bcd-c47025f13c28.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90645804-662a0d80-e204-11ea-9a15-ef242cf043da.gif"}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-100"
      src={"https://user-images.githubusercontent.com/44556715/90458246-df721500-e0cb-11ea-901b-438f2d121317.gif"}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Markerless Mocap Data Animation</Card.Title>
      <Card.Text>
      <ul class="my-list-style">
              <li> Leveraged Blender's Python API to create tool which automatically produces an animated skeleton armature from markerless mocap data. </li>  
              <li>Cleaned large amounts of mocap data and leveraged Blender's API to create an automated animation
export system which exports animationed keyframed and baked on armature and mesh as an FBX, GLTF, or USD file.</li> </ul>
              <a href="https://github.com/MatthisLab/VisualizationGoProMocap" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Graphics Programming | Blender | Motion Capture | Python | Research 
      </Card.Text>
    </Card.Footer>
  </Card>

  <Card>
  <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/139947367-d75c7c20-81db-4c9b-b03e-5a4244a10fe1.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/138212661-d20f39b0-f849-45e0-b1cd-94a4d40f1a6a.png"}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/138212284-75eeee67-fd42-4c19-9728-0436d840b27d.gif"}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/138215279-8c1dd95f-d149-4c1e-bea2-7102cefbd166.gif"}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/138213086-80d059ad-b39e-468b-b174-981216de290a.gif"}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Maya Tool : Place Around Center</Card.Title>
      <Card.Text>
      <ul class="my-list-style">
              <li>A Maya tool written in Python3 using maya.cmds and Qt that allows users to easily and quickly place objects in/around another object with a set radius and many other customizable parameters.</li>
              <li>Allows user to place many selected objects in an even circle or randomly around a center object.</li>   
              <li>Includes ability to place around the perimeter of a circle, or around radius of a sphere.</li>
              </ul>
              <a href="https://github.com/jallex/Maya_Tool_Place_Around_Center" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Maya tools | DCC | Python | Qt
      </Card.Text>
    </Card.Footer>
  </Card>
  
</CardDeck>

<CardDeck className="deck1">
<Card>
     <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/182992916-35dc6b09-315e-47a2-9fc8-cd22bcd81e48.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/182992074-9fbf846e-d478-4be5-a64c-de89a1109670.gif"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/186820955-1dbda14e-a47b-4953-afcc-129696a047fb.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/186820971-58e89880-d49d-4e46-b3b6-7d6c267b39a1.gif"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/182992919-45442b48-fabe-44be-8c86-42deaf4947f1.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/182992917-99ea44a6-9eec-4db8-98fb-740ccf4baa35.png"}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>Raytracer</Card.Title>
      <Card.Text>
        <ul>
          <li>Renders realistic images through ray tracing techniques on 3D scenes.</li>
          <li>Used C++ to implement space-time raytracing, motion blur, AABBs, BVH volumes, image textures, perlin noise, Vector3 math operations, rays, shaders, lights, geometry in a scene,
normal determination, antialiasing, materials with refraction and reflection, and cameras.</li>
    <li>Based on Peter Shirley's Raytracer Series.</li>
        </ul>
        <a href="https://github.com/jallex/Raytracer_Renderer" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
    Graphics Programming | C++ 
      </Card.Text>
    </Card.Footer>
  </Card>
<Card>
  <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90457857-b309c900-e0ca-11ea-9ec1-602af3d1058e.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/91449976-c561d080-e849-11ea-809c-4b42e5d14175.gif"}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/108858476-31837e00-75ba-11eb-986c-017bb1dda950.gif"}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Marker Mocap Data Animation</Card.Title>
      <Card.Text>
      <ul class="my-list-style">
              <li>Using Python and the Blender API, translated marker mocap data into 3D environment with animated human skeleton.</li>
              <li>Developed tool that creates an animated armature with keyframed data for each bone, creates mesh and parented to armature, applies material and lighting to scene, 
                incorporates force plate data, matches frame rates, renders out frames </li>   
              
              <li> Calculated vectors and matrices related to position and rotation quaternions in 3D space, projected rays, manipulated cameras and rigid bodies.</li>
              <li>Wrote post-processing system to create fluid pipeline converting across different data file formats.</li>
              </ul>
              <a href="https://github.com/MatthisLab/Mocap-Cyr-Wheel" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Graphics Programming | Research | Python
      </Card.Text>
    </Card.Footer>
  </Card>
  {/* <Card>
  <Carousel interval ="100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90457756-78079580-e0ca-11ea-867b-bb03d63bd8ef.png"}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90457742-6faf5a80-e0ca-11ea-808c-2d07be0804f7.gif"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90457644-1ba47600-e0ca-11ea-9348-8288d707c4a8.gif"}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-50"
      src={"https://user-images.githubusercontent.com/44556715/90457677-3676ea80-e0ca-11ea-83f9-283ce580e79c.gif"}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Mocap Data clean-up:</Card.Title>
      <Card.Title>Autolabel Unlabeled Trajectories</Card.Title>
      <Card.Text>
      <ul class="my-list-style">
              <li>Created a system to identify unlabeled trajectories that belong to the same marker during mocap data collection session, and combine them into a single labeled trajectory.</li>
              <li>Pinpoint same marker trajectories using rgb camera frustum information such as far and near planes</li>
              </ul>
              {this.state.showMessageAutoLabel && <ul class="my-list-style">
              <li>Add mesh and armature to mocap data via Python script and Blender to create visualization</li>
              <li>Use Unity 3D environment and C# to cast an expanding ray, detect collision, and label desired trajectory</li>
              </ul>}
              <i onClick={() => this.onButtonClickHandler('autolabel')} className = "more-button" aria-hidden="true">{this.displayText(this.state.showMessageAutoLabel)}</i>
          <div className="Automated-Label">
          <a href="https://github.com/jallex/Automated-Labeling-Unlabeled-Trajectories" rel="noopener noreferrer" target="_blank">
          See project!
          </a>
          </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Graphics Programming | Unity | C#
      </Card.Text>
    </Card.Footer>
  </Card> */}
  <Card>
  <Carousel interval = "100000000000000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90459185-91124580-e0ce-11ea-9689-bb7cdb551aa4.PNG"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90459184-9079af00-e0ce-11ea-9077-81814ef633ba.png"}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90459186-91aadc00-e0ce-11ea-991e-59c94850d4be.png"}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    <Card.Body>
      <Card.Title>Spreadsheet (Mini Excel)</Card.Title>
      <Card.Text>
       <ul class="my-list-style">
<li>Using Java and Swing and the MVC design pattern, I created a working spreadsheet similar to Microsoft Excel and  Google Sheets.
Able to open saved sheets or create a new one. </li>
<li>Allows for infinite scrolling.</li>
<li>GoF patterns used: Composition, Visitor, Builder, Command, Observor</li></ul>
{this.state.showMessageSpreadsheet && <ul class="my-list-style"><li>If a value is edited, all cells that reference this cell will also be updated. </li>
<li>Cells that contain formulas may be functions of a fixed number of arguments, or of a range of values; they can contain conditionals to select among options; by creating a bunch of similar, consecutive rows they can even simulate fixed-length iteration. Formulas are only restricted to not contain cyclic references. </li>
<li>Ability to create a group of spreadsheets and reference between them.</li>
<li>The spreadsheet has user mouse, key, and event listeners. For example, the user is able to navigate using the keyboard arrow keys, and click buttons to change selected cells and their contents.</li>
<li>Extensive unit testing.</li></ul>}
<i onClick={() => this.onButtonClickHandler('spreadsheet')} className = "more-button" aria-hidden="true">{this.displayText(this.state.showMessageSpreadsheet)}</i>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Object-Oriented Programming | Model-View-Controller 

      </Card.Text>
    </Card.Footer>
  </Card>
  
  {/* <Card>
  <img
      className="d-block w-100"
      src={"https://user-images.githubusercontent.com/44556715/90459174-8788dd80-e0ce-11ea-9f1c-d7c21e4df6d9.PNG"}
      alt="First slide"
    />
    <Card.Body>
      <Card.Title>Pyramid Solitaire (3 models)</Card.Title>
      <Card.Text>
      <ul>
              <li>Using Java and the MVC design pattern, I created a solitaire game with 3 different models with different rules- basic, relaxed, and tripeaks.</li>
              <li>Textual view of game displayed in terminal.</li>
              <li>Created Mock models for extensive unit testing.</li>
              </ul> 
              Project Code available upon request.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>
        Object-Oriented Programming | Model-View-Controller 
      </Card.Text>
    </Card.Footer>
  </Card>
  */}
</CardDeck>
</div>
    )
}
}
export default Code;
