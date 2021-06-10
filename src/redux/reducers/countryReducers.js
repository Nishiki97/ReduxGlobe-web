import { ActionTypes } from '../constants/actionTypes';

const initState = {
    countries : [{
        id : 1,
        name : 'Japan',
    }],
};

export const countryReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_COUNTRIES:
            return state;
        default:
            return state;
    }
};