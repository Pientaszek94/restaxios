import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'


function Post({post}) {

    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState('')
    const [currentId, setcurrentId] = useState(false)

    const Clicked=()=>{
      setcurrentId(prevState=>!prevState)
    }

    useEffect(()=>{
       

        axios.get(`https://gorest.co.in/public/v1/posts/${post.id}/comments`)
        .then((res)=>{
            setComments(res.data.data)
            // console.log(`for posts ID ${post.id} there is: ${res.data.data.map(comm=> comm.id)} OR ${comments.map(comm=>comm.id)}` )
        })

        axios.get(`https://gorest.co.in/public/v1/users/${post.id}`)
        .then((res)=>{
          // console.log(`Autor: `, res.data.data.name)
          setAuthor(res.data.data.name)
        })
        
    },[post])


  return (
      <div onClick={Clicked} className={`cursor-pointer my-2 relative shadow-lg w-full md:w-4/6 h-fit 
      flex flex-col justify-between items-center`}>

          <div  className={`w-full h-60 p-2 grid grid-cols-4 gap-2`} >


                <div className='col-span-2' style={{ backgroundImage: `url('${faker.image.people(1234, 2345, true)}')`,
                  backgroundPosition:"50% 50%",
                  backgroundSize:"cover" 
                }} >

                </div>
                <div className='col-span-2'>
                  
                <h1 className=' font-semibold text-justify'>{post.title}</h1>
                  {
                    author!==''?(
                      <div className='w-full h-fit my-4 flex flex-row justify-center items-center'>
                        <img src={faker.image.cats(1234, 2345, true)} alt="folks" className='w-8 h-8 mx-2 rounded-lg'/>
                        <h1 className='text-gray-300 text-center'>{author}</h1>

                      </div>
                    ):null
                  }
                </div>
              </div>
             
                <div className={`w-full h-fit flex flex-col justify-start items-center my-4 overflow-hidden ${currentId?"h-fit":'h-0'}`}>
                <p className='p-2 text-justify'>{post.body}</p>
                  {
                      comments.length>0?<div className='w-5/6 h-fit flex flex-col justify-start items-center'>{comments.map((comm)=>(
                          
                          <div key={comm.id} className='grid grid-cols-8 gap-2 w-full my-2 shadow-md p-2'>
                              <div className='col-span-2 flex flex-col justify-center items-center'>
                                  <img src={faker.image.cats(1234, 2345, true)} alt="folks" className='w-8 h-8 mx-2 rounded-lg'/>  
                                  <h1 className='italic text-gray-300 text-xs text-center'>{comm.name}</h1>
                              </div>
                              <div className='col-span-6 flex flex-col justify-center items-center p-2 text-gray-400'>
                                {comm.body}
                              </div>
                                                        
                          </div>

                      ))}</div>
                      :(<div className='w-5/6 h-fit shadow-md my-2 p-2 
                      flex flex-col justify-start items-center text-gray-400'>
                                    No comments here, yet</div>)
                  } 
              </div>

      </div>
  )
}

export default Post