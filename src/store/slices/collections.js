import { createSlice } from '@reduxjs/toolkit'

const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        collections: []
    },
    reducers: {
        setCollections(state,action){
            state.collections = action.payload;
        }
    },
})

export const actions = {...collectionsSlice.actions}
export default collectionsSlice.reducer