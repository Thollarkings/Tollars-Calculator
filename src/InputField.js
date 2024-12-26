import React from "react";

const InputField = ({ inputValue }) => {
  return (
    <div className="InputField">
      <input type="text" value={inputValue} readOnly /> {/* Display the inputValue */}
    </div>
  );
};

export default InputField;
