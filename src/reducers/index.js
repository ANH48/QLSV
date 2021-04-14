import {combineReducers} from 'redux'

import buggerReducer from './buggerReducers'




const rootReducer = combineReducers ({
    // Nơi khai báo các reducer con
    buggers: buggerReducer,
});

export default rootReducer;