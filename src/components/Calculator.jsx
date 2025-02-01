import { useState } from "react";

const Calculator = () => {
  const BUTTON_LIST = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"
  ]

  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };

  const clear = () => {
    setInput("");
    setResult(0);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-4">Calculator</h1>
        <div className="mb-4">
          <input type="text" value={input} readOnly className="w-full p-2 mb-2 border !text-black border-gray-300 rounded" />
          <div className="grid grid-cols-4 gap-2">
            {BUTTON_LIST.map((button, i) => (<button key={i} name={button} onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">{button}</button>))}
            <button onClick={clear} className="p-2 bg-red-500 text-white rounded">C</button>
            <button onClick={calculate} className="p-2 bg-green-500 text-white rounded">=</button>
          </div>
        </div>
        <h2 className="text-xl font-bold !text-black">Result: {result === Infinity ? "can not divide by zero" : result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
