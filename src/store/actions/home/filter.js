import { ACTION_FILTER } from "Constants/store.js";

const returnData = (type, payload, rest) => (
    rest !== undefined && typeof rest === "object"
        ? { type, payload, ...rest }
        : { type, payload }
)

export const actionFilter = payload => (
    returnData( ACTION_FILTER.SET_ACTION_FILTER, payload )
);
