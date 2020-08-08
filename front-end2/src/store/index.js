import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/index';

const allReducer = combineReducers({ counter: counterReducer })


export const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//show store in the console
// store.subsrcibe(() => console.log(store.getState()));