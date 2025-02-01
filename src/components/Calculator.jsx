import { useState } from "react";

const Calculator = () => {
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
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <div className="grid grid-cols-4 gap-2">
            <button name="1" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">1</button>
            <button name="2" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">2</button>
            <button name="3" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">3</button>
            <button name="+" onClick={handleClick} className="p-2 bg-yellow-500 text-white rounded">+</button>
            <button name="4" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">4</button>
            <button name="5" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">5</button>
            <button name="6" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">6</button>
            <button name="-" onClick={handleClick} className="p-2 bg-yellow-500 text-white rounded">-</button>
            <button name="7" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">7</button>
            <button name="8" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">8</button>
            <button name="9" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">9</button>
            <button name="*" onClick={handleClick} className="p-2 bg-yellow-500 text-white rounded">*</button>
            <button name="0" onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">0</button>
            <button name="/" onClick={handleClick} className="p-2 bg-yellow-500 text-white rounded">/</button>
            <button onClick={clear} className="p-2 bg-red-500 text-white rounded">C</button>
            <button onClick={calculate} className="p-2 bg-green-500 text-white rounded">=</button>
          </div>
        </div>
        <h2 className="text-xl font-bold">Result: {result === Infinity ? "can not divide by zero" : result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
