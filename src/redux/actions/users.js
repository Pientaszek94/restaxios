import * as api from '../api'


export const getUsers=(page)=> async(dispatch)=>{
    try{
        const {data}= await api.fetchUsers(page);
        dispatch({type:"FETCH_ALL_USERS", payload: data});
        console.log("is FETCHED")
    }

    catch(error){
        console.log("BŁĘDYYY: ", error);
    }
}

export const createUser=(user)=> async(dispatch)=>{
    try {
        const {data}=await api.createUser(user)

        dispatch({type:"CREATE_USER", payload: data})

    } catch (error) {
        console.log("Błąd przy tworzeniu usera: ", error)
    }
}