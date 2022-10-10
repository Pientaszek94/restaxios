const reducer = (posts=[], action)=>{
    switch(action.type){
        case "FETCH_ALL_POSTS":
            return action.payload;
        case "FETCH_POST_COMMENTS":
            return action.payload;
        case "CREATE_POST":
            return {...posts, data:[...posts.data, action.payload]};
        default:
            return posts;
    }
}


export default reducer;