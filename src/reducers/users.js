// Sinhvien reducer 
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USERSBYID_REQUEST,
    GET_USERSBYID_SUCCESS,
    GET_USERSBYID_FAILURE,
    CHANGEISOPEN,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
  } from "../constants/usersConstants";

const initialState = {
    users: [],
    selectedUser: {},
    isOpen: false,
    isLoading: false,
    error: null,
    result: [],
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
        case UPDATE_USER_REQUEST: {
            return{...state, isLoading: true,isOpen: false, error: null}
        }
        case UPDATE_USER_SUCCESS: {
            return{...state,result: action.payload.result,isOpen: false, isLoading: false}
        }
        case UPDATE_USER_FAILURE: {
            return{...state,isLoading: false,isOpen: false, error: action.payload.error}
        }

        // DELETE USER
        case DELETE_USER_REQUEST: {
            return{...state, isLoading: true,isOpen: false, error: null}
        }
        case DELETE_USER_SUCCESS: {
            return{...state,result: action.payload.result,isOpen: false,isLoading: false}
        }
        case DELETE_USER_FAILURE: {
            return{...state,isLoading: false,isOpen: false, error: action.payload.error}
        }

        // ADD USER
        case ADD_USER_REQUEST: {
            return{...state, isLoading: true,isOpen: false, error: null}
        }
        case ADD_USER_SUCCESS: {
            return{...state,result: action.payload.result,isOpen: false,isLoading: false}
        }
        case ADD_USER_FAILURE: {
            return{...state,isLoading: false,isOpen: false, error: action.payload.error}
        }
        default:
            return state;
    }
}

export default users;