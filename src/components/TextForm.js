import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleEmail = () => {
    let words = text.split(" ");
    let email = words.find(
      (word) => word.indexOf("@") > -1 && word.indexOf(".com") > -1
    );
    setText(email ? email : "No Email Found");
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="Textarea">{props.title}</label>
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "#b2b3ca" : "grey",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="form-control"
              id="Textarea"
              value={text}
              onChange={handleOnChange}
              rows="8"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={handleLowClick}
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={handleEmail}
          >
            Extract Email
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={handleClear}
          >
            Clear Text Area
          </button>
        </form>
      </div>
      <div className="container">
        <h2 className="text-center">Text Summary:</h2>
        <p className="text-center">
          Words : {text.split(" ").filter(word => word).length} <br />
          Characters : {text.length}
        </p>
      </div>
    </>
  );
}
