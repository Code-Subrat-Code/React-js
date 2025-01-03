import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [counter,setCounter] = useState(15)
   
  //let counter = 15
         
  const addValue = () => {
    // counter = counter+1
    setCounter(counter + 1)
    if(counter == 20){
      alert("You have reached the limit")
      setCounter(20)
    }
  
  }

  const removeVlaue  = ()=>{
    setCounter(counter - 1)
    if(counter == 0 ){
      alert("you have reached the lower limit")
      setCounter(0)
    }
   
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counetr Value:{counter}</h2>

     <button onClick={addValue} >Add Value{counter}</button>
     <br />
     <button onClick={removeVlaue}>Remove Value {counter}</button>
    </>
  )
}

export default App
