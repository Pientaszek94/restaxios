import * as api from '../api'


export const getPosts=(page)=> async(dispatch)=>{
    try{
        const {data}= await api.fetchPosts(page);
        dispatch({type:"FETCH_ALL_POSTS", payload: data});
        console.log("is FETCHED")
    }

    catch(error){
        console.log("BŁĘDYYY: ", error);
    }
}


export const getPostComments=(id)=> async(dispatch)=>{
    try{
        const {data}= await api.fetchPostComments(id);
        dispatch({type:"FETCH_POST_COMMENTS", payload: data});
        console.log("is FETCHED")
    }

    catch(error){
        console.log("BŁĘDYYY komentarzy: ", error);
    }
}

export const createPost=(post)=> async(dispatch)=>{
    try {
        const {data}=await api.createPost(post)

        dispatch({type:"CREATE_POST", payload: data})

    } catch (error) {
        console.log("Błąd przy tworzeniu Posta: ", error)
    }
}