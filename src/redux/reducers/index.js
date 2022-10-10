import { combineReducers } from "redux";
import users from "./users.js"
import posts from './posts.js'
import todos from './todos.js'
const reducers=combineReducers({users, posts, todos})

export default reducers;