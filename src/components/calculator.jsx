import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {

  const [num, setNum] = useState({ num1: "", num2: "" });
  const [store, setStore] = useState("");

  const handleValue = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setNum({ ...num, [inputName]: inputValue });
  };

  const add = (a, b) => {
    const numm = parseInt(a) + parseInt(b);
    setStore(numm);
  };

  const mul = (a, b) => {
    const numm = a * b;
    setStore(numm);
  };
  const sub = (a, b) => {
    const numm = a - b;

    setStore(numm);
  };
  const div = (a, b) => {
    const numm =  a / b;
    setStore(numm);
  };
  // const del=()=>{
  //   setStore('');
  //   setNum({num1: "", num2: ""})
  // }

  return (
    <div>
      <h1 className="modefiyH1">CACULATOR</h1>
      <div>
        <input
          className="numInput"
          name="num1"
          onChange={handleValue}
          value={num.num1}
          placeholder="First number"
        />
      </div>
      <div>
        <input
          className="numInput"
          name="num2"
          onChange={handleValue}
          value={num.num2}
          placeholder="Second number"
        />
        <button
          className="btn btn-primary inner"
          onClick={() => add(num.num1, num.num2)}
        >
          Add Button
        </button>
        <button
          className="btn btn-success inner"
          onClick={() => mul(num.num1, num.num2)}
        >
          Multiply Button
        </button>
        <button
          className="btn btn-warning inner"
          onClick={() => sub(num.num1, num.num2)}
        >
          subtract Button
        </button>
        <button
          className="btn btn-info inner"
          onClick={() => div(num.num1, num.num2)}
        >
          divide Button
        </button>
        <h1>Calculation Result is {store}</h1>
        <input
          className="numInput"
          name="result"
          value={store}
          placeholder="Final result is"
        />
         {/* <button
          className="btn btn-danger "
          onClick={del}
        >Remove Data</button> */}
      </div>
    </div>
  );
};

export default Calculator;
