
/**
 * REDUX setup
 * v.0.0.1 Oct 2018
 */
import {createStore, combineReducers} from 'redux';
import {
  loaderReducer, headerReducer,
  personsReducer
} from './reducers';

const appStore = createStore(
  combineReducers({
    header: headerReducer,
    loader: loaderReducer,
    persons: personsReducer
  })
);

export default appStore;
