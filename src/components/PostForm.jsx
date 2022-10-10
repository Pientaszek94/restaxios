import React, {useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { createPost } from '../redux/actions/posts'
import InputUser from './InputUser'

function PostForm({newPostId}) {

    const dispatch=useDispatch()

    const [postInfo, setPostInfo] = useState({
                                    body:"", id:"", user_id:"", title:""
                                })

    
    const handleChange=(e)=>{
        setPostInfo({...postInfo, [e.target.name]: e.target.value});
    }
    
    const Submit=(e)=>{
        e.preventDefault();
        dispatch(createPost(postInfo));
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.location.reload(false)
        
    }
    
    
    useEffect(()=>{
        setPostInfo({...postInfo, id: newPostId});
        
    },[postInfo.title])
    
    return (   
        <div className='w-10/12 h-62 flex flex-col justify-center items-center'>
        {newPostId?console.log("POST PISZE: ", postInfo):null}
        <form className='shadow-lg w-5/6 flex flex-col justify-center items-center' onSubmit={Submit}>

        <div className='flex flex-col justify-center items-center'>

            <h1 className='text-center font-semibold'>Author</h1>

            <InputUser name="user_id" Change={handleChange}
            value={postInfo.user_id} 
            placeholder="Your User Id" type="text"/>

            <Link to="/users" className='w-full flex flex-col justify-center items-center'>
                <h2 className='text-xs hover:underline w-5/6 text-center'>
                    forgot your User Id or maybe you are new here? Click here to create or your profile</h2>
            </Link>

        </div>
        <div className=' my-2 flex-col justify-center items-center shadow-md w-full h-fit'>

            <h1 className='text-center font-semibold'>New Post </h1>

                <InputUser name="title" Change={(e)=>setPostInfo({...postInfo, title:e.target.value})}
                value={postInfo.title} 
                placeholder="Title" type="text"/>

                <InputUser name="body" Change={(e)=>setPostInfo({...postInfo, body:e.target.value})}
                value={postInfo.body} 
                placeholder="Body" type="text"/>



            <h1 className='text-center'>Post id:{newPostId}</h1>
        </div>
        <button type="submit" className='p-2 my-4 bg-yellow-200 text-white font-semibold shadow-md'>Add new User</button>
        </form>

    </div>
  )
}

export default PostForm