import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST } from '../actions/types'

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}

export default function (state = initialState, action) {

    const { type, payload } = action

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            }
        case UPDATE_LIKES:
            //ADD LIKE TO A CERTAIN POST
            //we open up the state and replace the posts field using the returning array from map function
            //we map through the posts array because we want to add like to likes array inside a posts matching the postID
            //passed from the action
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload.postId ? { ...post, likes: payload.likes } : post),
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}