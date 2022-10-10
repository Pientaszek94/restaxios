import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loading, PageNavigation, UserForm } from '../components';

import { getUsers } from '../redux/actions/users';

function Users() {

const infos=useSelector((state)=>state.users);
const dispatch=useDispatch();

const [page, setPage] = useState(1)
const [pages, setPages] = useState()
const [currentId, setCurrentId] = useState(null)
const [newUserId, setnewUserId] = useState(null)

useEffect(()=>{
    dispatch(getUsers(page))
    if(infos.length!==0){
      if(page===1){
        setnewUserId((Math.max(...infos.data.map(user=> user.id)))+1)
      }
    }  
}, [page])

useEffect(()=>{


  if(infos.length!==0){
          setPages(infos.meta.pagination.pages)
  }

},[infos])


const CancelView=()=>{
  setCurrentId(null)
}

console.log("USERZYYY: ", infos)

// THIS IS WHERE REAL USERS JSX BEGINS 
return (
  <div className='flex flex-col items-center h-fit md:w-5/6 w-full min-h-fit'>
        <h1 className='text-3xl font-semibold py-4'>
            List of Users
        </h1>
        
          {infos.length!==0?console.log("Największe id: ",Math.max(...infos.data.map(user=> user.id))):null}
          
            
            {/* THIS IS WHERE USERS ARE RENDERED */}
            
          {  infos.length!==0? infos.data.map(user=>{
              
              // THANKS TO THIS FUNCTION, YOU CAN SELECT USERS ID AND SEE USERS FURTHER INFORMATION
              const Clicked=()=>{
                setCurrentId(user.id)
              }
 

            return(
              <div key={user.id} className={`shadow-lg xl:w-1/2 md:w-3/4 w-11/12 ${currentId!==user.id?"h-14":"h-46"} my-4 relative`}>
                <h1 className={`text-center w-full ${currentId!==user.id?"bg-blue-300":"bg-blue-500"} my-4 text-white font-semibold`}>
                {user.name}
                </h1>

                {/* FURTHER USERS INFORMATIONS */}
                {
                
                  currentId===user.id?(
                    <div className='grid grid-cols-12 text-sm gap-2 md:px-6 lg:px-12 my-12' >
                        <div className='col-span-3 md:col-span-6 text-center'>
                          <h5 className='font-semibold h-10'>User Id</h5>
                          <h5 className='font-semibold h-10'>Gender</h5>
                          <h5 className='font-semibold h-10'>Email</h5>
                          <h5 className='font-semibold h-10'>Status</h5>
                        </div>

                        <div className='col-span-9 md:col-span-6'>
                            <h5 className='h-10'>{user.id}</h5>
                            <h5 className='h-10'>{user.gender}</h5>
                            <h5 className='h-10'>{user.email}</h5>
                            <h5 className='h-10'>{user.status}</h5>
                        </div>
                  </div>
                  ):null
                }


                {/* BUTTON TO SHOW INFO */}

                <div className='w-full h-8 absolute bottom-0 
                  flex flex-col justify-center items-center translate-y-1/2'>

                      <div  className={`cursor-pointer w-8 h-8 ${currentId===user.id?`bg-red-300 hover:bg-red-400`
                      :`bg-yellow-200 hover:bg-yellow-400`}  duration-500 rounded-full flex flex-col justify-center items-center`}>
                             {
                              currentId!==user.id?(<div className="arrow-down" onClick={Clicked}></div>)
                              :(<div onClick={CancelView} className="arrow-up"></div>)
                             }
                      </div>

                </div>

              </div>
            )}): (<Loading/>)
          }

        {/* THIS IS WHERE YOU CAN NAVIGATE BETWEEN PAGES */}
        {
          infos.length===0?null:(
            <div className='w-full'>
              <PageNavigation page={page} pages={pages} setPage={setPage}/>
              
              {/*NEW USER FORM THAT POSTS DATAS INTO USERS DATA BASE */}
              <UserForm userId={newUserId}/>
            </div>
          )
        }



       
        
    </div>
  )
}

export default Users