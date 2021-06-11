import { countryReducer, selectedCountryReducer, searchCountryReducer } from './countryReducers';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    allcountries : countryReducer,
    selectedcountry : selectedCountryReducer,
    filteredcountry : searchCountryReducer,
});

export default reducers;
