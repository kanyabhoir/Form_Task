import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "./formDataSlice";

export const store = configureStore({
    reducer:{
        usersData: formDataSlice
    },
})

