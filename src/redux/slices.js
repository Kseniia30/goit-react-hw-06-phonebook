import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

const contactsReducer = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact(state, {payload}) {
            return [...state, payload]
        },
        deleteContact(state, {payload}) {
            return state.filter(contact => contact.id !== payload)
        },
    },
})

const filterReducer = createSlice({
    name: "filteredContacts",
    initialState: "",
    reducers: {
        findContact(state, { payload }) {
            return state = payload
        }
    }
})

const rootReducer = combineReducers({
    "contacts": contactsReducer.reducer,
    "filteredContacts": filterReducer.reducer,
})

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const { addContact, deleteContact } = contactsReducer.actions
export const { findContact } = filterReducer.actions
