import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Count() {
  const [count, setCount] = useState(0)
  return(<div className='App'>
      <h2>Counter:{count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>INCREMENT</button>
          
        
        </div>)
          
  
}

export default Count
