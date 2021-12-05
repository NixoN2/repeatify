import { combineReducers } from "@reduxjs/toolkit";
import user from "../slices/user";
import collections from "../slices/collections";
import { usersApi } from '../service/users';
import { collectionsApi } from "../service/collections";
export const rootReducer = combineReducers({
    [usersApi.reducerPath]: usersApi.reducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
    user: user,
    collections:collections
});

