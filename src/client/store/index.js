import { configureStore } from "@reduxjs/toolkit"
//import authReducer from "whereever the file is" THIS IS FOR AUTH STUFF
import api from "./api";


const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        //auth: authReducer, THIS IS FOR AUTH STUFF
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;