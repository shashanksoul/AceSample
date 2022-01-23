import {UPLOAD_POSTS_REQUEST, UPLOAD_POSTS_SUCCESS, UPLOAD_POSTS_FAILED, RESET_POST_API_STORE } from "../actions/types";

const initialState = {
    isUploading: false,
    error: undefined,
    success: false,
}

const uploadPostReducer = (state = initialState,action) => {
    switch(action.type){
        case UPLOAD_POSTS_REQUEST:
            return {...state,isUploading:true,success:false};
        case RESET_POST_API_STORE:
            return {...state,isUploading: false,
                error: undefined,
                success: false};
        case UPLOAD_POSTS_SUCCESS:
            return {...state,isUploading:false,error:undefined,success:true};
        case UPLOAD_POSTS_FAILED:
            return {...state,isUploading:false,error:action.payload,success:false};
         default :
         return state;     
    }
}

export default uploadPostReducer;