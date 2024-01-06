// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

// let myObj = {
//   username: 'Kartik',
//   age: 19
// }


function App() {
  
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>
     <Card username="Kartik Labhshetwar" btnText="Visit Me"/>
    </>
  )
}

export default App
