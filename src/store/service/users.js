// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        GetUserById: builder.query({
            query: (id) => `users/${id}`,
        }),
        GetUsers: builder.query({
            query: (id) => `users/${id}`,
        }),
        Login: builder.mutation({
            query: (body) => ({
                url: `login`,
                method: 'POST',
                body: body
            }),
            transformResponse: (response) => response.data
        }),
        SignUp: builder.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body: body
            }),
            transformResponse: (response) => response.data
        })
    }),
})

export const {
    useGetUserByIdQuery,
    useGetUsersQuery,
    useLoginMutation,
    useSignUpMutation
} = usersApi;
