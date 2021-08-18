import { ACTION_USER } from "Constants/store.js";

const returnDataProp = (type, payload, property, propKey) => (
    propKey !== undefined && property !== undefined
        ? { type, property, payload, propKey }
        : { type, payload }
)

const returnData = (type, payload, rest) => (
    rest !== undefined && typeof rest === "object"
        ? { type, payload, ...rest }
        : { type, payload }
)
export const actionUser =  ( payload, property, propKey )  => (
    returnDataProp( ACTION_USER.SET_ACTION_USER_PROP, payload, property, propKey)
);

export const actionAddUser = payload => (
    returnData(  ACTION_USER.SET_ACTION_USER_ADD, payload )
);
