import { combineReducers } from "@reduxjs/toolkit";
import user from "../slices/user";
import collections from "../slices/collections";
import { usersApi } from '../service/users';
import { collectionsApi } from "../service/collections";
import { auth } from "../service/auth";
export const rootReducer = combineReducers({
    [usersApi.reducerPath]: usersApi.reducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
    [auth.reducerPath]: auth.reducer,
    user: user,
    collections:collections
});

