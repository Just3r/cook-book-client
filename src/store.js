import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import promisesMiddleware from './middlewares/index';
import promise from 'redux-promise';
import logger from 'redux-logger';
import rootReducer from './reducers/index';

const defaultState = {
  dishes: {
    list:[],
    selected:{},
    error:{},
    ascending: true
  },
  ingridients: {
    list:[],
    selected:{},
    error:{},
    ascending: true
  }
};

let createStoreWithMiddleware = applyMiddleware(promisesMiddleware,promise,logger)(createStore)

const store = createStoreWithMiddleware(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;

