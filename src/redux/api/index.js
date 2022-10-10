import axios from 'axios'

const API=axios.create({baseURL: "https://gorest.co.in/public/v1"});

const token="533cf50ef2ce9cc08d7ea03ded78dd5dd8a32b009601f2ffd6f6bbc5ca89fa8f";

API.interceptors.request.use((req)=>{
    req.headers.Authorization=`Bearer ${token}`;

    return req;
});


// USERs REST

export const fetchUsers=(page)=> API.get(`/users?page=${page}`);

export const createUser=(newUser)=>API.post(`/users`, newUser);

// POSTs REST

export const fetchPosts=(page)=> API.get(`/posts?page=${page}`)

export const createPost=(post)=> API.post(`/posts`, post)

export const fetchPostComments=(id)=> API.get(`/posts/${id}/comments`)

// TODOS REST

export const fetchTodos=(page)=> API.get(`/todos?page=${page}`)