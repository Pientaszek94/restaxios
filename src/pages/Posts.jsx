import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loading, PageNavigation, Post, PostForm } from '../components'
import { getPosts } from '../redux/actions/posts'


function Posts() {
  const posts=useSelector(state=>state.posts)
  const dispatch=useDispatch()
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState()
  const [newPostId, setNewPostId] = useState()

  useEffect(()=>{
    dispatch(getPosts(page))
  },[page])



  useEffect(()=>{

    if(posts.length!==0){
            setPages(posts.meta.pagination.pages)
            if(page===1){
              setNewPostId((Math.max(...posts.data.map(post=> post.id)))+1)
            }
    }
  
  })
 
  return (
    <div className={` flex flex-col items-center w-full min-h-screen py-6`}>
      {posts.length!==0?console.log("POSTYY: ", posts):null}
          <h1 className='text-3xl text-semibold'>
            New Posts
          </h1>

          <div className={`w-11/12 h-10/12 flex flex-col items-center`}>
            {
              posts.length!==0?posts.data.map((post)=>{  
                

                return(

                  <Post post={post} key={post.id}/>
                  
                )
              }):(<Loading/>)
            }
          </div>
         
          {
          posts.length===0?null:(
            <div className='w-full flex flex-col items-center'>
              <PageNavigation data={posts} page={page} pages={pages} setPage={setPage}/>
              <PostForm newPostId={newPostId}/>
            </div>
          )
        }
         
    </div>
  )
}

export default Posts