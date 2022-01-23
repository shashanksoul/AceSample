import { uploadPostApi } from "../../api/PostApi";
import {UPLOAD_POSTS_REQUEST,UPLOAD_POSTS_SUCCESS ,UPLOAD_POSTS_FAILED, RESET_POST_API_STORE } from "./types";

export const uploadPostsRequest = () => ({type:UPLOAD_POSTS_REQUEST});
export const resetPostApiStore = () => ({type:RESET_POST_API_STORE});


export const uploadPostsSuccess = () => ({
    type:UPLOAD_POSTS_SUCCESS,
})

export const uploadPostsError = (error) => ({
    type:UPLOAD_POSTS_FAILED,
    payload:error
})

export const uploadPost = (caption,imageUrl) => {
    return async dispatch => {
        dispatch(uploadPostsRequest());
        try {
            const data = await uploadPostApi(caption,imageUrl)
            const postData  = await data.get()
            dispatch(uploadPostsSuccess());
         }catch(err){
            dispatch(uploadPostsError(err.message))
        }
    }
}