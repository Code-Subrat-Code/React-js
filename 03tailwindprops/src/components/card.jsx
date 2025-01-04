import React from 'react'

function card({userName,paragraph = "|| visit me"}) {
    console.log(userName);
    
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/29748951/pexels-photo-29748951/free-photo-of-street-vendor-with-fruit-bicycle-in-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {userName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
         {paragraph }
        </p>
      </div>
  )
}

export default card
