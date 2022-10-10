import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Todo({todo, style}) {


  const [user, setUser] = useState()
  const [currentId, setcurrentId] = useState(false)

  const [deadDays, setDeadDays] = useState()

  const Clicked=()=>{
    setcurrentId(prevState=>!prevState)
  }



useEffect(()=>{

  axios.get(`https://gorest.co.in/public/v1/users/${todo.user_id}`)
  .then((res)=>{
    setUser(res.data.data.name)
  })

  const dueDate=new Date(todo.due_on)
  const todayDate=new Date()

  setDeadDays(Math.floor((dueDate.getTime()-todayDate.getTime())/(24*3600*1000)))
  
},[])
  

  return (
    <div style={style} onClick={Clicked} className=' 
    centered h-60'>

      {console.log("deadline: ", deadDays)}

      <div className='centered p-8 shadow-md w-3/4 h-fit'>

        <h1 className={`text-center  ${todo.status==="pending"?"bg-blue-400":"line-through bg-red-400"} text-white font-semibold px-4 p-2 text-sm md:text-base`}>Task #{todo.id}<br/>{todo.title}</h1>

        {
          !currentId?null
          :(<div className=''>
            <h3 className='text-center'>
              Responsible User: <span className='font-semibold'>{user}</span>
            </h3>
            {
              todo.status==="completed"?null
              :deadDays<=0?(
                <div>HURRY UP BECAUSE TIME IS UP!</div>
              ):(
                <h3 className='text-center'>
                  Must be done within <br/>
                  <span className='font-semibold text-center'>
                    {deadDays} {deadDays===1?"day":"days"}
                    </span>
                </h3>
            )
            }
            
            


          </div>)
        }

      </div>
    

    </div>
  )
}

export default Todo