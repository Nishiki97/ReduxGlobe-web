import { countryReducer, selectedCountryReducer } from './countryReducers';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    allcountries : countryReducer,
    country : selectedCountryReducer,
});

export default reducers;
