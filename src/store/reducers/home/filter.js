import { ACTION_FILTER } from 'Constants/store.js'

export default ( state = {}, action = {} ) => {
    if( !state ) {
        return null
    }

    let newState = state;

    const { type, payload } = action;

    if( type === ACTION_FILTER.SET_ACTION_FILTER ) {
        if ( payload === "students" ) {
            newState = { ...state,  ...{ hogwartsStudent : true, hogwartsStaff : false, hogwartfinado : false } }
        }
        else if ( payload === "staff" ) {
            newState = { ...state, ...{ hogwartsStudent : false, hogwartsStaff : true, hogwartfinado : false } }
        }
        else if ( payload === "finado" ) {
            newState = { ...state, ...{ hogwartsStudent : false, hogwartsStaff : false, hogwartfinado : true } }
        }
    }

    return newState
}
