import { ACTION_USER } from 'Constants/store.js'

export default ( state = {}, action = {} ) => {
    if( !state ) {
        return null
    }

    let newState = state;

    const { type, payload, property, propKey } = action;

    if ( type === ACTION_USER.SET_ACTION_USER_PROP ) {
        console.log("payload",payload)
        console.log("property",property)
        console.log("propKey",propKey)
        console.log("state",state)
        //newState = { ...state, [ propKey ] : payload }
    }

    return newState
}
