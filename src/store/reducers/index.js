import { combineReducers } from "@reduxjs/toolkit";
import user from "../slices/user";
import collections from "../slices/collections";
export const rootReducer = combineReducers({
    user: user,
    collections:collections
});

