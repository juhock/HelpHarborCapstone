import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../components/login/authslice"
import api from "./api";


const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;