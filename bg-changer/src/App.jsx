import { useState } from "react"


function App() {
 const [color , setColor] = useState("white")
  return (
    <>
    
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

 
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      
        <div className="flex flex-wrap justify-center gap-1 shadow-xl bg-white px-3 py-2 rounded-full ">
          <button onClick={()=>setColor("Red")}   className="duration-1000 outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("Green")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=>setColor("Blue")}  className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=>setColor("White")} className="outline-none px-4 rounded-full text-black shadow-lg " style={{backgroundColor:"White"}}>White</button>

        </div>
        
       </div>


   </div>
   </>
  )
}

export default App
