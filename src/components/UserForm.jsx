import React, {useState } from 'react'
import { useDispatch} from 'react-redux';
import { createUser } from '../redux/actions/users';
import InputUser from './InputUser';

function UserForm({userId}) {
const dispatch=useDispatch()
const [userData, setUserData] = useState({
    email:"", gender:"", id:"", name:"", status:""
})


// IT SENDS NEW USER TO USERS DATA BASE
const Submit=(e)=>{
    e.preventDefault();

    dispatch(createUser(userData));

    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.reload(false)

    setUserData({})
}


// IT ENROLLS, SAVES INFOS ABOUT NEW USER IN STATE THAT WILL BE USED IN ACTION createUser()
const handleChange=(e)=>{
    setUserData({...userData, id:userId})
    setUserData({...userData, [e.target.name]:e.target.value})
}



  return (
    <div className='h-96 w-full shadow-inner my-6'>

        {/* if you want to see that User's Data is changing */}
        {/* {console.log("USER DATA: ", userData)} */}


        <h1 className='text-center font-semibold text-3xl'>Create new User</h1>
        <h2 className='text-center text-xs'>Do NOT use your true Id</h2>
        
        {/* HERE YOU CAN WRITE ABOUT NEW USER AND EVERY INFO WILL BE STASHED IN STATE userData THANKS TO SIMPLE FUNCTION handleChange() */}
        
        <form method="post" onSubmit={Submit} className="h-full w-full flex flex-col justify-start items-center">
        
        {/* THESE ARE INPUT COMPONENTS TO SHORTEN CODE LENGTH AND SPEED CODING UP */}
            <InputUser name="name" Change={handleChange}
             value={userData.name} 
             placeholder="Name" type="text"/>

             <InputUser name="email" Change={handleChange}
             value={userData.email} 
             placeholder="Email" type="email"/>

            {/* HERE ARE STACKED OPTIONS TO CHOOSE ONE FROM THEM */}
            <select name="gender" onChange={handleChange} className='m-2 text-center focus:outline-none border-b-2 w-40'>
                <option value="" className='option'>Select gender</option>
                <option value="male" className='option'>male</option>
                <option value="female" className='option'>female</option>
                <option value="other" className='option'>other</option>
            </select>
            <InputUser Change={handleChange} name="status" value="active" type="radio">
                active
            </InputUser>
            <InputUser Change={handleChange} name="status" value="inactive" type="radio">
                inactive
            </InputUser>
            <button type="submit" className='p-2 bg-yellow-200 text-white font-semibold shadow-md'>Add new User</button>

        </form>
    </div>
  )
}

export default UserForm