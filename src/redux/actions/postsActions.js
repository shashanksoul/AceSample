import { getPosts } from "../../api/PostApi";
import {FETCHING_POSTS_REQUEST,FETCHING_POSTS_SUCCESS ,FETCHING_POSTS_FAILED } from "./types";

export const fetchingPostsRequest = () => ({type:FETCHING_POSTS_REQUEST});

export const fetchingPostsSuccess = (response) => ({
    type:FETCHING_POSTS_SUCCESS,
    payload:response
})

export const fetchingPostsError = (error) => ({
    type:FETCHING_POSTS_FAILED,
    payload:error
})

export const fetchPosts = () => {
    return async dispatch => {
        dispatch(fetchingPostsRequest());
        try {
            var posts = [];
            const snapShot = await getPosts();
            snapShot.forEach(doc => posts.push(doc.data()));
            dispatch(fetchingPostsSuccess(posts));
         }catch(err){
            dispatch(fetchingPostsError(err.message))
        }
    }
}