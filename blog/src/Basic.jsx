 import React,{useState} from "react";
 function App(){
    const[count,setCount]=useState(0);
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1> HELLO REACT👋👋</h1>
            <h2>COUNT:{count}</h2>
            <button onClick={() =>setCount(count+1)}>INCREASE</button>
            <button onClick={() =>setCount(count-1)}>DECREASE</button>
            <button onClick={() =>setCount(0)}>RESET</button>
            
        </div>
    );
 }
 export default App;