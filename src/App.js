import React, { useState } from "react";
import Display from "./Display";
import InputField from "./InputField";
import Button from "./Button";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(""); // Stores the current input string (e.g., "10 +")
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null); // Stores the selected operation
  const [previousValue, setPreviousValue] = useState(null); // Stores the previous number before the operation

  const handleOperation = (selectedOperation) => {
    if (inputValue) {
      // Store the current input number before operation
      setPreviousValue(Number(inputValue.trim())); // Trim spaces before storing the previous value
    }
    setOperation(selectedOperation);
    setInputValue((prevValue) => prevValue + " " + selectedOperation + " "); // Show operation in input field (e.g., "10 + ")
  };

  const handleSubmit = () => {
    if (previousValue === null || inputValue === "") return; // If there's no previous value, do nothing

    const currentValue = Number(inputValue.split(" ").pop().trim()); // Extract the last number from the input and trim spaces
    if (isNaN(currentValue)) return; // If it's not a number, do nothing

    let newResult = result;
    switch (operation) {
      case "+":
        newResult = previousValue + currentValue;
        break;
      case "-":
        newResult = previousValue - currentValue;
        break;
      case "x":
        newResult = previousValue * currentValue;
        break;
      case "÷":
        if (currentValue === 0) {
          alert("Cannot divide by zero");
          return;
        }
        newResult = previousValue / currentValue;
        break;
      default:
        break;
    }

    setResult(newResult); // Update result
    setInputValue(""); // Clear the input field after calculation
    setPreviousValue(null); // Reset previous value
    setOperation(null); // Reset operation
  };

  const handleResetInput = () => {
    setInputValue(""); // Reset the input
  };

  const handleResetResult = () => {
    setResult(0); // Reset the result
  };

  const handleInputChange = (num) => {
    // Append number to the input string
    setInputValue((prevValue) => prevValue + num);
  };

  return (
    <div className="App">
      <h1 className="Title">Simplest Working Calculator</h1>
      <div className="Calculator">
        <Display result={result} />
        <InputField inputValue={inputValue} /> {/* Pass inputValue to InputField */}
        <div className="NumberPad">
          {[...Array(10).keys()].map((num) => (
            <Button
              key={num}
              onClick={() => handleInputChange(num.toString())}
              text={num.toString()}
            />
          ))}
        </div>
        <div className="ButtonContainer">
          <Button onClick={() => handleOperation("+")} text="Add" />
          <Button onClick={() => handleOperation("-")} text="Subtract" />
          <Button onClick={() => handleOperation("x")} text="Multiply" />
          <Button onClick={() => handleOperation("÷")} text="Divide" />
          <Button onClick={handleSubmit} text="Equals" />
        </div>
        <div className="ButtonContainer1">
          <Button onClick={handleResetInput} text="Clear Input" />
          <Button onClick={handleResetResult} text="Clear Result" />
        </div>
      </div>
      <footer>
        <h5>&copy; Thollarkings 2024</h5>
      </footer>
    </div>
  );
}

export default App;
