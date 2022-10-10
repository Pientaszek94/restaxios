import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const subsites=["users", "posts", "todos"]
  return (
    // NAVBAR
    <div className='w-full shadow-md h-20 
        flex flex-row justify-between items-center'>
            <Link to="/">
                <div className='m-6 relative'>
                    <div className='absolute w-8 h-8 bg-yellow-200'></div>
                    <div className='absolute bottom-2 right-2 w-4 h-4 bg-blue-200'></div>
                    <h1 className='relative text-lg md:text-3xl font-semibold p-2'>
                        PWL-REST
                    </h1>
                </div>
            </Link>

            <div className='flex flex-row justify-center mx-6'>
                {
                    subsites.map((sub,index)=>{
                    
                        return (
                            <Link to={`/${sub}`} key={index}>
                                {/* AUTO CAPITAL LETTERS  */}
                                <h3 className='mx-2'>{sub.charAt(0).toUpperCase()+sub.slice(1)}</h3>
                            </Link>
                        )
                    })    
                }
            </div>
    </div>
  )
}

export default Navbar