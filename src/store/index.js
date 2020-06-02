import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';

export const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

const composeEnhancers =
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
const appStore = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});


export default appStore;
