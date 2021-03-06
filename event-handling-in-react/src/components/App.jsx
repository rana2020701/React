import React, { useState } from "react";

function App() {
const [handlingText, setHandlingText] = useState("hello!")

const [isMouseOver, setMouseOver] = useState(false)

function handlingClick(){
  setHandlingText("submited")
}

function handleMouseOver(){
  setMouseOver(true);
}
function handleMouseOut() {
  setMouseOver(false);
}
  return (
    <div className="container">
      <h1>{handlingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style = {{backgroundColor: isMouseOver? "black" : "white"}}
      onClick = {handlingClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

export default App;
