import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

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

export const rootReducer = combineReducers({
    "contacts": contactsReducer,
    "filteredContacts": filterReducer,
})

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};

export const persistedReducer = persistReducer(persistConfig, rootReducer)