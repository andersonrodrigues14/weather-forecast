import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import rootReducer from "./reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: pReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);

