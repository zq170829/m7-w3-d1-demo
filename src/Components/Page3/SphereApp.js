import React, { Fragment, Component } from "react";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from '@react-vertex/dom-hooks';
import Scene from "./Scene";

function SphereApp() {
  const { width, height } = useViewportSize();
  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}

export default SphereApp;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Example />, rootElement);

/* NOTE TO FUTURE SELF

  I added this to index.html:
  
  <style>
    html, body, div {
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  </style>
*/
