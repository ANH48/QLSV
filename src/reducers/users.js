// Sinhvien reducer 
import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE} from '../constants/usersConstants';

import {GET_USERSBYID_REQUEST,GET_USERSBYID_SUCCESS,GET_USERSBYID_FAILURE} from '../constants/usersConstants';

const initialState = {
    users: [],
    selectedUser: [],
    isLoading: false,
    error: null,
}

function users(state= initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST: {
            return{...state, isLoading: true, error: null}
        }
        case GET_USERS_SUCCESS: {
            return{...state,users: action.payload.data, isLoading: false}
        }
        case GET_USERS_FAILURE: {
            return{...state,isLoading: false, error: action.payload.error}
        }
        // GET_USERSBYID_REQUEST
        case GET_USERSBYID_REQUEST: {
            return{...state, isLoading: true, error: null}
        }
        case GET_USERSBYID_SUCCESS: {
            return{...state,selectedUser: action.payload.data, isLoading: false}
        }
        case GET_USERSBYID_FAILURE: {
            return{...state,isLoading: false, error: action.payload.error}
        }

        default:
            return state;
    }
}

export default users;