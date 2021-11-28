import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            id: 0,
            firstName: "",
            lastName: "",
            email: window.localStorage.getItem("email"),
            role: ""
        },
        currentUser: {
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            role: ""
        },
        isAuthorized: !!window.localStorage.getItem("isAuthorized")
    },
    reducers: {
        setUser(state,action){
            state.user = action.payload;
        },
        setAuthorized(state, action){
            state.isAuthorized = action.payload;
        },
        setCurrentUser(state,action){
            state.currentUser = action.payload;
        }
    },
})

export const actions = {...userSlice.actions}
export default userSlice.reducer