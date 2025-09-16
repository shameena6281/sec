import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Count() {
  const [count, setCount] = useState(0)
  return(<div className='App'>
    <div className='container'>
      <h2>Counter:{count}</h2>
      <div className='buttons'>
        <button onClick={() => setCount((count) => count + 1)}>INCREMENT</button>
          <button onClick={() => setCount((count) => count -1)}>DECREMENT</button>
          <button onClick={() => setCount(0)}>RESET</button>
      </div>
    </div>
  </div>)
          
  
}

export default Count
