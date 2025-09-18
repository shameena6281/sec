export default function Contact(){
      return (<><h1>Contact Page</h1></>)

}

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
      <h1>Input Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Type name instead"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={message}
          placeholder="Type message instead"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
  )

}



