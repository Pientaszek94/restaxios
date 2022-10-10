import React from 'react'

function Loading() {
  return (
    <div className='h-screen w-full centered 
    font-bold italic '>
            {/* SPINNING LOADING SQUARE */}
         <div className='bg-yellow-200 w-28 h-28 animate-spin'></div>Loading...
    </div>
  )
}

export default Loading