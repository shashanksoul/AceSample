import {FETCHING_POSTS_REQUEST,FETCHING_POSTS_SUCCESS, FETCHING_POSTS_FAILED, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_PROGRESS, UPLOAD_IMAGE_FAILED, RESET_IMAGE_API_STORE } from "../actions/types";

const initialState = {
    isImageUploading: false,
    error: '',
    url: undefined,
    progress:0
}

const uploadImageReducer = (state = initialState,action) => {
    switch(action.type){
        case UPLOAD_IMAGE_REQUEST:
            return {...state,isImageUploading:true,progress:0,error:''};
        case UPLOAD_IMAGE_SUCCESS:
            return {...state,isImageUploading:false,url:action.payload,progress:100,error:''};
        case UPLOAD_IMAGE_FAILED:
            return {...state,isImageUploading:false,progress:0,url:undefined,error:action.payload};
         case UPLOAD_IMAGE_PROGRESS:
                return {...state,isImageUploading:true,progress:action.payload,url:undefined,error:''};
          case RESET_IMAGE_API_STORE:
              return {...state, isImageUploading: false,
                error: '',
                url: undefined,
                progress:0};
         default :
         return state;     
    }
}

export default uploadImageReducer;