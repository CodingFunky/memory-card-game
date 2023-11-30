import React from "react";
import { useState } from "react";
import Card from "./components/card.jsx";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Memory Game</h1>
      <p className="rules">
        Click all pictures without clicking the same one twice!
      </p>
      <p className="scoreBoard">Score: </p>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
