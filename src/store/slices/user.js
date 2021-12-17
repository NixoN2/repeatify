import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            auth0Id: window.localStorage.getItem("auth0Id") || false,
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            role: ""
        },
        token: window.localStorage.getItem("token") || ""
    },
    reducers: {
        setUser(state,action){
            state.user = action.payload;
        },
        setToken(state,action){
            state.token = action.payload;
        }
    },
})

export const actions = {...userSlice.actions}
export default userSlice.reducer