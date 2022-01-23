import { uploadImageApi, uploadPost } from "../../api/PostApi";
import {UPLOAD_POSTS_REQUEST,UPLOAD_POSTS_SUCCESS ,UPLOAD_POSTS_FAILED, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_FAILED, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_PROGRESS, RESET_IMAGE_API_STORE } from "./types";

export const uploadImageRequest = () => ({type:UPLOAD_IMAGE_REQUEST});
export const resetImageApiStore = () => ({type:RESET_IMAGE_API_STORE});

export const uploadImageSuccess = (response) => ({
    type:UPLOAD_IMAGE_SUCCESS,
    payload:response
})

export const uploadImageProgress = (response) => ({
    type:UPLOAD_IMAGE_PROGRESS,
    payload:response
})


export const uploadImageError = (error) => ({
    type:UPLOAD_IMAGE_FAILED,
    payload:error
})

export const uploadImage = (imageUri) => {
    return dispatch => {
        dispatch(uploadImageRequest());
        uploadImageApi(imageUri,progress =>
         dispatch(uploadImageProgress(progress.toFixed(2))),url => dispatch(uploadImageSuccess(url),error => uploadImageError(error)))
    }
}