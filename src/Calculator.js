import React, { useRef, useState } from "react";
import Display from "./Display";
import InputField from "./InputField";
import Button from "./Button";

function Calculator() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue !== 0) {
      setResult((result) => result / inputValue);
    } else {
      alert("Cannot divide by zero");
    }
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="Calculator">
      <Display result={result} />
      <InputField inputRef={inputRef} />
      <Button onClick={plus} text="add" />
      <Button onClick={minus} text="subtract" />
      <Button onClick={times} text="multiply" />
      <Button onClick={divide} text="divide" />
      <Button onClick={resetInput} text="reset input" />
      <Button onClick={resetResult} text="reset result" />
    </div>
  );
}

export default Calculator;
