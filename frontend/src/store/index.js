import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import user from './user/reducers';
import character from './character/reducers';

const reducers = combineReducers({
	user,
	character
});
const composeEnhancers = compose;
const enhancer = composeEnhancers(applyMiddleware(thunk), devToolsEnhancer());

export default createStore(reducers, enhancer);
