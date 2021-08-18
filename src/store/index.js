import { createStore, applyMiddleware, compose } from "redux";
import persistState, { mergePersistedState }     from 'redux-localstorage';

import thunk   from "redux-thunk";
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter  from 'redux-localstorage-filter';

import allReducers from './reducers/index.js'

/* NOTE: Estado inicial del store */
import  { INITIAL_STATE } from './initial-state.js';

/* NOTE: Reidratacion del store con los datos almacenados en el session storage */
const REDUCER = compose ( mergePersistedState() )( allReducers );

/**NOTE: Declaración de persistencia en el sessionStorage */
const STORAGE = compose ( filter( [ "user_data","filter" ] ) ) ( adapter( sessionStorage ) );

const CREATE_PERSISTENT_STORE = compose (
    persistState( STORAGE, 'test-aeromexico' ),

    applyMiddleware( thunk )

) ( createStore );

let store = CREATE_PERSISTENT_STORE ( REDUCER, INITIAL_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

if ( process.env.NODE_ENV === 'production' ) {
    store = CREATE_PERSISTENT_STORE ( REDUCER, INITIAL_STATE );
}

export default store;
