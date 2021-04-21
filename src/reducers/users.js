// Sinhvien reducer 
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USERSBYID_REQUEST,
    GET_USERSBYID_SUCCESS,
    GET_USERSBYID_FAILURE,
    CHANGEISOPEN,
    GET_USERUPDATE_REQUEST,
    GET_USERUPDATE_SUCCESS,
    GET_USERUPDATE_FAILURE,
  } from "../constants/usersConstants";

const initialState = {
    users: [],
    selectedUser: {},
    isOpen: false,
    isLoading: false,
    error: null,
}

function users(state= initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST: {
            return{...state, isLoading: true,isOpen: false, error: null}
        }
        case GET_USERS_SUCCESS: {
            return{...state,users: action.payload.data,isOpen: false, isLoading: false}
        }
        case GET_USERS_FAILURE: {
            return{...state,isLoading: false,isOpen: false, error: action.payload.error}
        }
        // GET_USERSBYID_REQUEST
        case GET_USERSBYID_REQUEST: {
            return{...state, isLoading: true,isOpen: false, error: null}
        }
        case GET_USERSBYID_SUCCESS: {
            return{...state,selectedUser: action.payload.data,isOpen: true, isLoading: false}
        }
        case GET_USERSBYID_FAILURE: {
            return{...state,isLoading: false,isOpen: false, error: action.payload.error}
        }

        // CHANGEISOPEN
        case CHANGEISOPEN: {
            return{...state,isOpen: !action.payload.isOpen}
        }

        // UPDATE USER 
        case GET_USERUPDATE_REQUEST: {
            return{...state, isLoading: true,isOpen: false, error: null}
        }
        case GET_USERUPDATE_SUCCESS: {
            return{...state,isOpen: false, isLoading: false}
        }
        case GET_USERUPDATE_FAILURE: {
            return{...state,isLoading: false,isOpen: false, error: action.payload.error}
        }

        default:
            return state;
    }
}

export default users;