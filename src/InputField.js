import React from "react";
import "./App.css"; // Ensure you import the CSS file

function InputField({ inputRef }) {
  return (
    <input
      className="InputField"
      pattern="[0-9]"
      ref={inputRef}
      type="number"
      placeholder="Type a number"
    />
  );
}

export default InputField;
