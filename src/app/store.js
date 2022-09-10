
import counterReducer from './feature/counter/counterSlice'
import { configureStore } from "@reduxjs/toolkit";

export  const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})