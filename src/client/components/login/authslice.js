import { createSlice } from "@reduxjs/toolkit";
import api from "../../store/api";

// Authentication endpoints

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: "/auth/register",
                method: "POST",
                body, credentials,
            }),
            // usually transform error response goes here, but we don't need it
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
            // usually transform error response goes here, but we don't need it
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;