import React from 'react'

function Sliderbarclass1() {
  return (

   <>
   <div className="flex ">
    <div className="transition-all delay-2000 ease-in-out opacity-0 md:opacity-100  transform   bg-red-500 w-96 h-screen">
        siderbar
    </div>
    <div className="bg-green-200 w-full h-screen">
        content
    </div>
   
   </div>
   <button class="transition duration-500 ease-in-out transform hover:scale-110 hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded">
   Hover for Scale & Color Change
</button>
   </>
  )
}

export default Sliderbarclass1