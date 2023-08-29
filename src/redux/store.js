//the setup for redux-state 
import { accountReducer } from "./account/accountSlice";
import {configureStore} from "@reduxjs/toolkit";
import { localeReducer } from "./locale/localeSlice";


export const store = configureStore({
    reducer: {
        account: accountReducer,
        locale: localeReducer,
    }
})