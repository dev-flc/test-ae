import { ACTION_USER } from "Constants/store.js";

export const returnDataProp = (type, payload, property, propKey) =>
    propKey !== undefined && property !== undefined
        ? { type, property, payload, propKey }
        : { type, payload };

export const actionUser =  ( payload, property, propKey )  => (
    returnDataProp( ACTION_USER.SET_ACTION_USER_PROP, payload, property, propKey)
);
