import {ADD_BREADMID,REDUCE_BREADMID} from '../constants/buggerConstants';
 
 const initialState = {

    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

    menu: {

        salad: 10,

        cheese: 20,

        beef: 55

   },

    total: 85

}

function buggerReducer (state = initialState, action)  {
    switch (action.type) {
        case ADD_BREADMID:
                    let  burgerUpdate= {...state.burger};
                    burgerUpdate[action.payload.propMenu] += 1;
                    state.burger = burgerUpdate;

                     state.total += 1 * state.menu[action.payload.propMenu];
                    return {...state};
        case REDUCE_BREADMID:
                    let burgerUpdate2= {...state.burger};
                    if(burgerUpdate2[action.payload.propMenu] === 0) {
                        return {...state};
                    }
                    else {
                        burgerUpdate2[action.payload.propMenu] -= 1;
                        state.burger = burgerUpdate2;
                        state.total -= state.menu[action.payload.propMenu] * 1;
                        return {...state};
                    }
        default:
            return state;
    }
}

export default buggerReducer;