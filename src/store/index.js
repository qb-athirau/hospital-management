import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

const composeEnhancers =
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default appStore;
