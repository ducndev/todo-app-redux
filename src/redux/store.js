import {createStore} from 'redux';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const composedEnhencers = composeWithDevTools();
const store = createStore(rootReducer, composedEnhencers);

export default store;