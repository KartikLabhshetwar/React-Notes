import { useState } from "react"

function App() {
  const [color , setColor] = useState("#3D3B40")


  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center p-20 inset-x-0 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=> setColor("olive")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={()=> setColor("purple")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={()=> setColor("pink")} className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={()=> setColor("lavender")} className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg" style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={()=> setColor("white")} className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
