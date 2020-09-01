import React from "react";
import "./styles.css";
import NeoButtonIcon from "./Components/NeoButtonIcon";

import { ReactComponent as YourSvg } from "./share.svg";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <NeoButtonIcon>
        {/* <YourSvg /> */}
        <p>a</p>
      </NeoButtonIcon>
    </div>
  );
}
