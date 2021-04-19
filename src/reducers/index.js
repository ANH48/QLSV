import {combineReducers} from 'redux'

import buggerReducer from './buggerReducers'
import users from './users'




const rootReducer = combineReducers ({
    // Nơi khai báo các reducer con
    buggers: buggerReducer,
    users,
});

export default rootReducer;