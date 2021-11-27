import { createSlice } from '@reduxjs/toolkit'

const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        collections: [],
        currentCollection: null
    },
    reducers: {
        setCollections(state,action){
            state.collections = action.payload;
        },
        setCollection(state,action){
            state.currentCollection = action.payload;
        }
    },
})

export const actions = {...collectionsSlice.actions}
export default collectionsSlice.reducer