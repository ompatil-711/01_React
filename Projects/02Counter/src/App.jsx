import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter,setCounter] = useState(15)

  const addValue = () => {
    console.log("Clicked",counter)
    const newCounter  = counter +2
    setCounter(newCounter)
  }
  const removeValue = () =>{
    console.log("removed",counter)
    const newCounter=counter-2
    setCounter(newCounter)
  }
  return (
    <>
      <h1>Basic Project(Counter)</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Counter</button>
      <br></br>
      <button onClick={removeValue}>Remove Counter</button>
    </>
  )
}

export default App
