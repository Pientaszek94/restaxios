import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AutoSizer, List } from 'react-virtualized';
import { Loading, Todo } from '../components';
import { getTodos } from '../redux/actions/todos';

import {PageNavigation} from '../components'


function Todos() {
  const todos=useSelector(state=> state.todos);
  const dispatch=useDispatch()

  const [page, setPage] = useState(1)
  const [pages, setPages] = useState()


  useEffect(()=>{
    dispatch(getTodos(page))
    
  }, [page])


  useEffect(()=>{


    if(todos.length!==0){
            setPages(todos.meta.pagination.pages)
    }
  
  },[todos])

// THIS COMPONENT RETURNS INFORMATIONS ABOUT TODOS BUT ONLY WHEN DATA WILL BE FULLY FETCHED
  return (
    <div className={` flex flex-col items-center w-full min-h-screen py-6`}>
      <h1 className='text-3xl font-semibold py-4'>List of Tasks to do</h1>
      {todos.length!==0?console.log("TODOS: ", todos):null}
      {
        todos.length===0?(<Loading/>)
        :(
          <div style={{width:"90%", height:"70vh"}} className="shadow-lg">
              <AutoSizer>
                {
                  ({width,height})=>(
                    <List
                      width={width}
                      height={height}
                      rowHeight={240}
                      rowCount={todos.data.length}
                      rowRenderer={({index, style})=>{

                        const todo=todos.data[index];
                    
                        return(

                          <Todo todo={todo} key={index} style={style}/>

                        )
                    
                    
                      }}/>
                  )
                }
              </AutoSizer>
          </div>
        )      
      }
        {
          todos.length!==0?(
            <div className='w-full'>
              <PageNavigation page={page} pages={pages} setPage={setPage}/>
            </div>
          ):null
        }
    </div>
  )
}

export default Todos