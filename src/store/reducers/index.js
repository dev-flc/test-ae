import { combineReducers } from "redux";

import ReducerFilter  from 'Reducers/home/filter.js';
import ReducerUser  from 'Reducers/home/user.js';

const reducersCombined = combineReducers( {
    filter    : ReducerFilter,
    user_data : ReducerUser
} );

export default ( state = { }, action = {} ) => reducersCombined( { ...state }, action );
