import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore,persistReducer } from "redux-persist";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";
import formreducer from './slice'
const rootresucer=combineReducers({
    form:formreducer
})

const persistconfig={
    key:'root',
    storage
}

const PersistReducer=persistReducer(persistconfig,rootresucer)

const store=configureStore({
    reducer:PersistReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })
})

export const persistor=persistStore(store);
export default store;