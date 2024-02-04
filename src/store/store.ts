import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../store/listsSlice/listsSlice";

const store = configureStore({
    reducer:{
        list: listsReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;