// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function Count() {
//   const [count, setCount] = useState(0)
//   return(<div className='App'>
//     <div className='container'>
//       <h2>Counter:{count}</h2>
//       <div className='buttons'>
//         <button onClick={() => setCount((count) => count + 1)}>INCREMENT</button>
//           <button onClick={() => setCount((count) => count -1)}>DECREMENT</button>
//           <button onClick={() => setCount(0)}>RESET</button>
//            if {count>5 && count<10}:
//       </div>
//     </div>
//   </div>)
          
  
// }

// export default Count
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // Add value to input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear screen
  const handleClear = () => {
    setInput("");
  };

  // Calculate result
  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // eval() evaluates string as JS
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <h2>React Calculator</h2>
      <div className="calculator">
        <input type="text" value={input} readOnly />

        <div className="buttons">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleEqual}>=</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>

        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;

