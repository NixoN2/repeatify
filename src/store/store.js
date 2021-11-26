import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { actions as slicesActions } from "./slices";

const store = configureStore({
    reducer: rootReducer,
});

export const actions = { ...slicesActions };
export default store;
