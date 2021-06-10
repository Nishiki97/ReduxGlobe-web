import { countryReducer, selectCountryReducer } from './countryReducers';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    allcountries : countryReducer,
    country : selectCountryReducer,
});

export default reducers;
