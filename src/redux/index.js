import thunk from "redux-thunk";
import {createLogger} from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from "redux";
import postReducer from "./reducers/postsReducer";
import uploadPostReducer from "./reducers/uploadPostReducer";
import uploadImageReducer from "./reducers/uploadImageReducer";


 const rootReducer = combineReducers({postReducer,uploadPostReducer,uploadImageReducer})

 const store = createStore(rootReducer,applyMiddleware(thunk,createLogger()));

 export default store