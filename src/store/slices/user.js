import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            id: window.localStorage.getItem("id") || 0,
            firstName: "",
            lastName: "",
            email: "",
            role: ""
        },
        currentUser: {
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            role: ""
        },
    },
    reducers: {
        setUser(state,action){
            state.user = action.payload;
        },
        setCurrentUser(state,action){
            state.currentUser = action.payload;
        }
    },
})

export const actions = {...userSlice.actions}
export default userSlice.reducer