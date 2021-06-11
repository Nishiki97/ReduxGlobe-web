import { countryReducer, selectedCountryReducer } from './countryReducers';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    allcountries : countryReducer,
    selectedcountry : selectedCountryReducer,
});

export default reducers;
