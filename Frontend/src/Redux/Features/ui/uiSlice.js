import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthModalOpen : false,
    authModalView : 'login'
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openAuthModal : (state, action) => {
            state.isAuthModalOpen = true,
            state.authModalView = action.payload || 'login'
        },
        clearAuthModal : (state) => {
            state.isAuthModalOpen = false
        },
        setAuthModalView : (state, action) => {
            state.authModalView = action.payload
        }
    }
})

export const {openAuthModal, clearAuthModal, setAuthModalView} = uiSlice.actions

export default uiSlice.reducer