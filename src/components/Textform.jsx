import React, { useState } from "react";
const Textform = (props) => {
  const Texthandle = (e) => {
    setText(e.target.value);
  };
  const capitalizeFLetter = () => {
    let capitalizeText = text
      .split("")
      .map((char, index) => (index === 0 ? char.toUpperCase() : char))
      .join("");
    setText(capitalizeText);
    props.showAlert("Converted to Capitalize Text", "success");
  };
  const upper = () => {
    let uppertext = text.toUpperCase();
    setText(uppertext);
    props.showAlert("Converted to upper case", "success");
  };
  const lower = () => {
    let lowert = text.toLowerCase();
    setText(lowert);
    props.showAlert("Converted to lower case", "success");
  };
  const revers = () => {
    let rev = text.split("").reverse().join("");
    setText(rev);
    props.showAlert("Converted to Reverse case", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("Textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to Clipboard!", "success");
  };

  const ExtraSpace = () => {
    let ExtraSpace = text.split(/[ ]+/);
    setText(ExtraSpace.join(" "));
    props.showAlert("Extra Space Removed ", "success");
  };
  const Clear = () => {
    let clear = "";
    setText(clear);
    props.showAlert("Clear", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="my-3">{props.heading} </h2>
        <div className="mb-3">
          <label htmlFor="Textarea" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={Texthandle}
            style={{
              backgroundColor: props.mode === "dark" ? "#374151" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}
            id="Textarea"
            rows="9"
          ></textarea>{" "}
        </div>
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
          onClick={revers}
        >
          Revers
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary  mx-1 my-2"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary  mx-1 my-2"
          onClick={ExtraSpace}
        >
          Remove Extara Space
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary  mx-1 my-2"
          onClick={Clear}
        >
          Clear
        </button>
        <div className=" container my-4">
          <h2>Your Text Summary</h2>
          <p>
            {" "}
            {
              text.split(" ").filter((e) => {
                return e.length !== 0;
              }).length
            }{" "}
            Word and {text.length} characters
          </p>
          <p>
            {0.08 *
              text.split(" ").filter((e) => {
                return e.length !== 0;
              }).length}{" "}
            minutes read
          </p>
        </div>
        <div className=" container my-4">
          <h3>Perview</h3>
          <p>{text.length > 0 ? text : "Nothing to perview"}</p>
        </div>
      </div>
    </>
  );
};

export default Textform;
