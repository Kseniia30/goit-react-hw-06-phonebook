import { combineReducers, configureStore, createAction } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const addContact = createAction("contacts/addContact")
export const deleteContact = createAction("contacts/deleteContact")
export const findContact = createAction("filteredContacts/findContact")

const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case "contacts/addContact":
            return [...state, action.payload]
        case "contacts/deleteContact":
            return state.filter(contact => contact.id !== action.payload)
        default:
            return state
    }
}

const filterReducer = (state = "", action) => {
    switch (action.type) {
        case "filteredContacts/findContact":
            return state = action.payload
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    "contacts": contactsReducer,
    "filteredContacts": filterReducer,
})

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

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