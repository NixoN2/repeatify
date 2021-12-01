import { combineReducers } from "@reduxjs/toolkit";
import user from "../slices/user";
import collections from "../slices/collections";
import { usersApi } from '../service/users';
export const rootReducer = combineReducers({
    [usersApi.reducerPath]: usersApi.reducer,
    user: user,
    collections:collections
});

