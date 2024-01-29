import React, { useState } from "react";
import "../style/TextForm.css";

export default function TextForm(props) {
  const handleUPClick = () => {
    // console.log("Upper Case is Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLOClick = () => {
    // console.log("Lower Case is Clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <h1 style={{ color: props.mode === "white" ? "black" : "white" }}>
        {props.heading}
      </h1>
      <div
        className="container-main"
        style={{ color: props.mode === "white" ? "black" : "white" }}
      >
        <div className="write mb-3">
          <form id="paper">
            <textarea
              className="form-control"
              value={text}
              onChange={handleonChange}
              id="text"
              rows="6"
              name="text"
            >
              {text.length > 0
                ? text
                : "Enter text in above box to preview it here"}
            </textarea>
          </form>
          {/* style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'white':'white' }} --> button state change. */}
        </div>
        <div className="button-container">
          <button id="button" className="button" onClick={handleUPClick}>
            Convert to UpperCase
          </button>
          <button id="button" className="button" onClick={handleLOClick}>
            Convert to LowerCase
          </button>
          <button id="button" className="button" onClick={handleClearClick}>
            Clear Text
          </button>
          <button id="button" className="button" onClick={handleCopy}>
            Copy Text
          </button>
          <button id="button" className="button" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="summary"
        style={{ color: props.mode === "white" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>Characters: {text.length}</p>
        {/* <br /> */}
        <p>
          Words:{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        {/* <br /> */}
        <p>Minutes: {0.08 * text.split(" ").length}</p>
        {/* <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter text in above box to preview it here..."}
        </p> */}
      </div>
    </>
  );
}
