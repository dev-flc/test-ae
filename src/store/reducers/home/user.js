import { ACTION_USER } from 'Constants/store.js'
import merge from 'lodash/merge';

const returnStatePropsData = ( payload, state, property, propkey  ) => {
    const newStateSub = setPropertyData( state[ propkey ] ,payload, property );
    const { ...rest } = merge( state[ propkey ], newStateSub );
    return { ...state, [ propkey ] : rest }
}

const setPropertyData = ( state, payload, propertyName ) => (
    { ...state, [ propertyName ] : payload  }
)

export default ( state = {}, action = {} ) => {
    if( !state ) {
        return null
    }

    let newState = state;

    const { type, payload, property, propKey } = action;

    if ( type === ACTION_USER.SET_ACTION_USER_PROP ) {
        newState = returnStatePropsData( payload, state, property, propKey );
    }

    return newState
}
