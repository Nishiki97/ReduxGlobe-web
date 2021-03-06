import { ActionTypes } from '../constants/actionTypes';

export const setCountries = (countires) => {
    return{
        type : ActionTypes.SET_COUNTRIES,
        payload : countires,
    };
};

export const selectCountries = (country) => {
    return{
        type : ActionTypes.SELECT_COUNTRIES,
        payload : country,
    };
};

export const removeSelectedCountry = () => {
    return{
        type : ActionTypes.REMOVE_SELECT_COUNTRIES,
    };
};

// export const searchCountries = (country) => {
//     return{
//         type : ActionTypes.SEARCH_COUNTRIES,
//         payload : country,
//     }
// };
