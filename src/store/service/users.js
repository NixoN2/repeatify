// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
    reducerPath: 'usersApi',
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
        GetUser: builder.query({
            query: (id) => `users/${id}`,
        }),
        GetUsers: builder.query({
            query: (id) => `users/${id}`,
        })
    }),
})

export const {
    useGetUserQuery,
    useGetUsersQuery,
} = usersApi;
