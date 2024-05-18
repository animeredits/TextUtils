import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Textform = (props) => {
  const [text, setText] = useState("");

  const Texthandle = (e) => {
    setText(e.target.value);
  };

  const stringToJson = () => {
    try {
      let jsonObject = JSON.parse(text);
      setText(JSON.stringify(jsonObject, null, 2)); 
      toast.success("Converted to JSON successfully");
    } catch (error) {
      toast.error("Invalid JSON string");
    }
  };

  const jsonToString = () => {
    try {
      let jsonObject = JSON.parse(text);
      let formattedString = JSON.stringify(jsonObject);
      setText(formattedString);
      toast.success("Converted to String successfully");
    } catch (error) {
      toast.error("Invalid JSON string");
    }
  };

  const capitalizeFLetter = () => {
    let capitalizeText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitalizeText);
    toast.success("Converted to Capitalize Text");
  };

  const upper = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    toast.success("Converted to Upper Case");
  };

  const lower = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    toast.success("Converted to Lower Case");
  };

  const reverse = () => {
    let rev = text.split("").reverse().join("");
    setText(rev);
    toast.success("Converted to Reverse Text");
  };

  const handleCopy = () => {
    let textarea = document.getElementById("Textarea");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    document.getSelection().removeAllRanges();
    toast.success("Copied to Clipboard!");
  };

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    toast.success("Extra Space Removed");
  };

  const clearText = () => {
    setText("");
    toast.success("Text Cleared");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "aliceblue" : "black" }}
      >
        <h2 className="my-3">{props.heading}</h2>
        <div className="mb-3">
          <label htmlFor="Textarea" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={Texthandle}
            style={{
              backgroundColor: props.mode === "dark" ? "#171717" : "aliceblue",
              color: props.mode === "dark" ? "aliceblue" : "#171717",
              border: "2px solid",
              borderColor: props.mode === "dark" ? "aliceblue" : "#171717",
            }}
            id="Textarea"
            rows="9"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={stringToJson}
        >
          JSON
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={jsonToString}
        >
          String 
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={capitalizeFLetter}
        >
          Sentence Case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={upper}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={lower}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={reverse}
        >
          Reverse
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={removeExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={clearText}
        >
          Clear
        </button>
        <div className="container my-4">
          <h5>Your Text Summary</h5>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.08 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes read
          </p>
        </div>
        <div className="container my-4">
          <h4>Preview</h4>
          <p style={{fontSize:"1rem"}}>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </>
  );
};

export default Textform;
