import { ActionTypes } from '../constants/actionTypes';

const initState = {
    countries : [],
};

export const countryReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_COUNTRIES:
            return {...state, countries : payload};
        default:
            return state;
    }
};

export const selectedCountryReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECT_COUNTRIES:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECT_COUNTRIES:
            return {};
        default:
            return state;
    }
};

// export const searchCountryReducer = (state = {}, {type, payload}) => {
//     switch (type) {
//         case ActionTypes.SEARCH_COUNTRIES:
//             return {...state, ...payload};
//         default:
//             return state;
//     }
// };