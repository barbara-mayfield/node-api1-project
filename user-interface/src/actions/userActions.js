import { userConstants } from './types';
import axios from 'axios';

export const getAll = () => dispatch => {
    dispatch({ type: userConstants.FETCH_ALL_REQUEST });
    axios.get('http://127.0.0.1:8080/api/users/')
        .then(res => {
            dispatch({ type: userConstants.FETCH_ALL_SUCCESS,
                        payload: res.data })
        })
        .catch(err => {
            dispatch({ type: userConstants.FETCH_ALL_FAILURE })
        })
}

export const getUser = (id) => dispatch => {
    dispatch({ type: userConstants.FETCH_USER_REQUEST });

    axios.get(`http://127.0.0.1:8080/api/users/${id}`)
        .then(res => {
            dispatch({ type: userConstants.FETCH_USER_SUCCESS,
                        payload: res.data.user.id })
        })
        .catch(err => {
            dispatch({ type: userConstants.FETCH_USER_FAILURE })
        })
}