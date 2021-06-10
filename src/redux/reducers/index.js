import { countryReducer, selectedCountryReducer, searchCountryReducer } from './countryReducers';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    allcountries : countryReducer,
    country : selectedCountryReducer,
    filteredcountry : searchCountryReducer,
});

export default reducers;
