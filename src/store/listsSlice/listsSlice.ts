import { createSlice } from "@reduxjs/toolkit";
import { ListData } from "../../model/listData";

type listsState = {
    listsData: ListData;
}

const initialState: listsState = {
    listsData: []
}

const listsSlice = createSlice({
    name: "list",
    initialState,
    reducers:{
        addTodoLists: (state, action) => {
            state.listsData = action.payload;
        }
    }
})


export const { addTodoLists } = listsSlice.actions; 
export default listsSlice.reducer;