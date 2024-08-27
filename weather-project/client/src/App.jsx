import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Hello world!")
  useEffect(() => {
    fetch('/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <h1>{message}</h1>
      </div>
    </>
  )
}

export default App
