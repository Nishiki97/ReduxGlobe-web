import { countryReducer } from './countryReducers';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    allcountries : countryReducer
});

export default reducers;
