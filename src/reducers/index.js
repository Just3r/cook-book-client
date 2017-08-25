import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import dishes from './dishes';
import ingridients from './ingridients';

const rootReducer = combineReducers({dishes, ingridients, form:formReducer, routing: routerReducer });

export default rootReducer;
