import { userConstants } from '../actions/types';

export const initialState = {
    users: [{
        name: "",
        bio: ""
    }],
    user: {
        name: "",
        bio: ""
    },
    error: ''
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case userConstants.FETCH_ALL_REQUEST: 
            return {
                ...state
            }
        case userConstants.FETCH_ALL_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case userConstants.FETCH_ALL_FAILURE:
            return {
                ...state,
                error: 'Failed to fetch users!'
            }
        case userConstants.FETCH_USER_REQUEST:
            return {
                ...state
            }
        case userConstants.FETCH_USER_SUCCESS:
            return {
                ...state,
                payload: state.user.id
            }
        case userConstants.FETCH_USER_FAILIRE:
            return {
                ...state,
                error: "Failed to fetch user!"
            }
        default:
            return state;
    }
}