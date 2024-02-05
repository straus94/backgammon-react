import {configureStore} from "@reduxjs/toolkit";
import cubesReducer from "./cubesReducer";

export const store = configureStore({
    reducer: {
        cubes: cubesReducer
    }
})