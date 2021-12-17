// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const auth = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://repeatify.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        Login: builder.mutation({
            query: (body) => ({
                url: `login`,
                method: 'POST',
                body: body
            }),
        }),
        SignUp: builder.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body: body
            }),
        })
    }),
})

export const {
    useLoginMutation,
    useSignUpMutation,
} = auth;
