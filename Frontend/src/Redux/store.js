import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../Redux/Features/authentication/authSlice.js';
import uiReducer from '../Redux/Features/ui/uiSlice.js'

export const store = configureStore({
    reducer: {
        auth : authReducer,
        ui: uiReducer
    }
})