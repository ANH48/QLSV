import {ADD_BREADMID,REDUCE_BREADMID} from '../constants/buggerConstants';
import {CHANGE_BREADMID} from '../constants/buggerConstants';
// export const addBreadmid = (propMenu) => {
//     return {
//         type: ADD_BREADMID,
//         payload: {
//             propMenu
//         },
//     };
// };
// export const reduceBreadmid = (propMenu) => {
//     return {
//         type: REDUCE_BREADMID,
//         payload: {
//             propMenu
//         },
//     };
// };

export const changeBreadmid = (propMenu,status) => {
    return {
        type: CHANGE_BREADMID,
        payload: {
            propMenu,
            status
        },
    };
};