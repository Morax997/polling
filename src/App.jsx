import { useState } from 'react'
import './App.css'
import { PollUnit } from "./components/PollUnit/PollUnit.jsx";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <PollUnit />
    </div>
  )
}

export default App
