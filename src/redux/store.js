import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist'
import { persistedReducer } from "./reducers";

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
        },
    }),
})
export const persistor = persistStore(store)