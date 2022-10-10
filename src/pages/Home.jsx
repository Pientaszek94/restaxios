import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=' relative w-full flex flex-col items-center p-4'>
        <div className='w-fit w-11/12 md:w-4/6 lg:w-2/5'>

            <div className='md:w-28 w-16 md:h-28 h-16 absolute bg-yellow-200 -z-index-10'></div>
            <div className='text-center px-4 relative px-4 flex flex-col items-center '>
                <h1 className='md:text-9xl text-7xl'>
                    Welcome!
                </h1>
                <h2 className='md:text-2xl'>I present to you my REST API App that uses 
                outer Data Base and fake informations, if those informations are missing, 
                such as images of posts and avatars. Those images are used only for 
                clearer reading purpose.
                Also I would like to give you a hint to see how 
                every component works after its rendering, because USERS are rendered directly
                in one component, but POSTS are rendered through component, called POST, that is nested.
                TODOS are rendered through REACT-VIRTUALIZED to minimize time needed to render these todos.
                Only by scrolling, rest of data is rendered on the go. 
                </h2>
                <h1 className='font-semibold'>Please go to Users site to create imaginary User profile</h1>
                <Link to="/users" className='font-bold text-green-400'>TAKE ME THERE!</Link>
            </div>
        </div>
    </div>
  )
}

export default Home