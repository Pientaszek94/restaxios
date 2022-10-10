import * as api from '../api'


export const getTodos=(page)=> async(dispatch)=>{
    try{
        const {data}= await api.fetchTodos(page);
        dispatch({type:"FETCH_ALL_TODOS", payload: data});
        console.log("Todos is FETCHED")
    }

    catch(error){
        console.log("BŁĘDYYY: ", error);
    }
}




