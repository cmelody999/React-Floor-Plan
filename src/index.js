import React from "react";
import ReactDOM from "react-dom";
import FloorPlan from "./FloorPlan";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <FloorPlan />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
