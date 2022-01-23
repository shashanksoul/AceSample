import {FETCHING_POSTS_REQUEST,FETCHING_POSTS_SUCCESS, FETCHING_POSTS_FAILED } from "../actions/types";

const initialState = {
    isFetching: false,
    error: '',
    posts: '',
}

const postReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCHING_POSTS_REQUEST:
            return {...state,isFetching:true};
        case FETCHING_POSTS_SUCCESS:
            return {...state,isFetching:false,posts:action.payload,error:''};
        case FETCHING_POSTS_FAILED:
            return {...state,isFetching:false,posts:'',error:action.payload};
         default :
         return state;     
    }
}

export default postReducer;