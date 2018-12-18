//合并所有的reducer并且返回
import {combineReducers} from 'redux'
// import {counter} from "./redux/index.redux";
// import {auth} from "./Auth.redux";
import {user} from "./redux/user.redux";

// export default combineReducers({counter,auth})
export default combineReducers({user})