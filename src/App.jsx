import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-center bg-gray-400 text-red-300 text-2xl">Hello</h1>
    </>
  )
}

export default App
