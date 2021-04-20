import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE} from '../constants/usersConstants';
import {GET_USERSBYID_REQUEST,GET_USERSBYID_SUCCESS,GET_USERSBYID_FAILURE,CHANGEISOPEN} from '../constants/usersConstants';

import usersAPI from '../services/usersAPI'
export function getUserById(id){
    return async (dispatch) => {
        dispatch({type: GET_USERSBYID_REQUEST});
        try {
            const {data} = await usersAPI.getUserById(id);
            dispatch({
                type: GET_USERSBYID_SUCCESS,
                payload: {data},
            })
        } catch (error) {
            dispatch({
                type: GET_USERSBYID_FAILURE,
                payload: {error: error.response.data},
            })
        }
    }
}
export function getUsers(){
    return async (dispatch) => {
        dispatch({type: GET_USERS_REQUEST});
        try {
            const {data} = await usersAPI.getUsers();
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: {data},
            })
        } catch (error) {
            dispatch({
                type: GET_USERS_FAILURE,
                payload: {error: error.response.data},
            })
        }
    }
}
export function changeIsOpen(isOpen){
    return {
        type: CHANGEISOPEN,
        payload: {
            isOpen,
        },
    };
}

