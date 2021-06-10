import { createStore } from 'redux';
import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;

