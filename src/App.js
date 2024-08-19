import React, { useState, useRef, useEffect } from "react";
import Display from "./Display";
import InputField from "./InputField";
import Button from "./Button";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field when the component mounts
    }
  }, []);

  const handleOperation = (operation) => {
    const value = Number(inputRef.current.value);
    if (isNaN(value) || inputRef.current.value === "") return; // Ignore if the input is not a number or is empty

    switch (operation) {
      case "add":
        setResult((prevResult) => prevResult + value);
        break;
      case "subtract":
        setResult((prevResult) => prevResult - value);
        break;
      case "multiply":
        setResult((prevResult) => prevResult * value);
        break;
      case "divide":
        if (value === 0) {
          alert("Cannot divide by zero");
          return;
        }
        setResult((prevResult) => prevResult / value);
        break;
      default:
        break;
    }
  };

  const handleResetInput = () => {
    inputRef.current.value = "";
  };

  const handleResetResult = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <h1 className="Title">Simplest Working Calculator</h1>
      <div className="Calculator">
        <Display result={result} />
        <InputField inputRef={inputRef} />
        <div className="ButtonContainer">
          <Button onClick={() => handleOperation("add")} text="Add" />
          <Button onClick={() => handleOperation("subtract")} text="Subtract" />
          <Button onClick={() => handleOperation("multiply")} text="Multiply" />
          <Button onClick={() => handleOperation("divide")} text="Divide" />
          <Button onClick={handleResetInput} text="Reset Input" />
          <Button onClick={handleResetResult} text="Reset Result" />
        </div>
      </div>
    </div>
  );
}

export default App;
