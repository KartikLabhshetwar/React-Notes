import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5;

  function addValue(){
    if(counter === 20){
      return;
    } else{
    setCounter(counter + 1);
    }
  }

  function removeValue(){
    if(counter === 0){
      return;
    }else{
    setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Project 1</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Subtract Value</button>
        
    </>
  )
}

export default App
