import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { actions as slicesActions } from "./slices";
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from './service/users';
import { collectionsApi } from "./service/collections";
import { auth } from './service/auth';
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware,collectionsApi.middleware, auth.middleware),
});

export const actions = { ...slicesActions };
export default store;

setupListeners(store.dispatch)