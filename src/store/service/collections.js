// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const collectionsApi = createApi({
    reducerPath: 'collectionsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        GetCollections: builder.query({
            query: () => `collections`,
        }),
        GetCollection: builder.query({
            query: (id) => `collections/${id}`
        }),
        CreateCollection: builder.mutation({
            query: (body) => ({
                url: 'collections',
                method: 'POST',
                body: body
            }),
        }),
        CreateCard: builder.mutation({
            query: (body) => ({
                url: 'card',
                method: 'POST',
                body: body
            })
        }),
        AddEditor: builder.mutation({
            query: (id,body) => ({
                url: `editors/${id}`,
                method: 'POST',
                body: body
            })
        })
        // ChangeCollection: builder.mutation({
        //     query: (id,body) => ({
        //         url: `collections/${id}`,
        //         method: 'PUT',
        //         body: body
        //     })
        // })
        // Login: builder.mutation({
        //     query: (body) => ({
        //         url: `login`,
        //         method: 'POST',
        //         body: body
        //     }),
        //     transformResponse: (response) => response.data
        // }),
    }),
})

export const {
    useGetCollectionQuery,
    useGetCollectionsQuery,
    useCreateCollectionMutation,
    useCreateCardMutation,
    useAddEditorMutation,
} = collectionsApi;