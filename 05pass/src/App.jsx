import { use } from 'react'
import { useLayoutEffect } from 'react'
import { useState ,useCallback ,useEffect , useRef } from 'react'



function App() {
  const [length , setlength] = useState(8)
  const [numberAllowed , setNumberAllowed] =useState(false)
  const [charAllowed ,setCharAllowed ] = useState(false)
  const[Password ,setPassword]  = useState("")

  //useRef hook 
  const passwordRef = useRef(null)

  const passswordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) {
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*()"
    }

    for (let i = 1; i <= length; i++){
    
      let char =Math.floor( Math.random()* str.length + 1)
      pass += str.charAt(char)
1     
    }
    setPassword(pass)

  } ,[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
// passwordRef.current?setSelectionRange(0,20);
window.navigator.clipboard.writeText(Password)
},
[Password])

  useEffect(()=>{
    passswordGenerator()

  },[length,numberAllowed,charAllowed,passswordGenerator])


  return (
    <>
    <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

      <h1 className='text-xl font-bold text-center my-4'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
         <input
            type="text" 
            value={Password} 
            className='outline-none w-full py-1 px-3' 
            placeholder='Password' 
            readonly
            ref={passwordRef}
         />

        <button
        onClick={copyPasswordToClipboard} 
        className='outline-none bg-blue-800 text-orange-500 
        px-3 py-0.5 shrink-0'>Copy
        </button>

      </div>

      
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
              min={6}
               max  = {30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label >lenght:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked  = {numberAllowed}
            id ="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev )}}/>
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked  = {charAllowed}
            id ="charInput"
            onChange={()=>{
              setCharAllowed((prev)=> !prev )}}/>
              <label htmlFor="numberInput">character</label>
          </div>
        </div>
    </div>
    </>
  )
}


export default App
