import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { counterReducer, dataReducer } from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './saga/sagas'

const allReducer = combineReducers({
    counter: counterReducer,
    data: dataReducer
});

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    allReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga)