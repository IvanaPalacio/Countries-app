
import { createStore, applyMiddleware, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));












// const ReduxDevsToolsOrCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, ReduxDevsToolsOrCompose(applyMiddleware(thunk))
// );

export default store;