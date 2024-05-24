import { useState } from 'react'
import './App.css'
import EightBall from './EightBall.jsx'

function App() {
  const [count, setCount] = useState(0)

  return <EightBall / >
}

export default App
