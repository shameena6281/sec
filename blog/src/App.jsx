import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function App() {
  
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}, your message is: ${message}`);
  };

  return (
    <div>
      {/* Router Navigation */}
      <Router>
        <nav>
          <Link to="/home">HOME</Link> |{" "}
          <Link to="/about">ABOUT</Link> |{" "}
          <Link to="/contact">CONTACT</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* Form */}
      <h1>Input Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Type name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={message}
          placeholder="Type message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Counter */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
