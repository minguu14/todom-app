import { createSlice } from "@reduxjs/toolkit";
import { ListData } from "../../model/listData";
import storage from "../../utils/storage";

const initialListsData: ListData = storage.get('listsData')
  ? storage.get('listsData')
  : [];

type listsState = {
  listsData: ListData;
};

const initialState: listsState = {
  listsData: initialListsData,
};

const listsSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTodoLists: (state, action) => {
      state.listsData = [...state.listsData, action.payload];
      storage.set("listsData", state.listsData);
    },

    completedTodoRemove: (state) => {
      const completedTodo = state.listsData.filter(
        (list) => list.isChecked !== true
      );
      state.listsData = completedTodo;
      storage.set("listsData", state.listsData);
    },

    checkItem: (state, action) => {
      state.listsData.map((list) => {
        if (list.id === action.payload) {
          list.isChecked = !list.isChecked;
        }
        return list;
      });
      storage.set("listsData", state.listsData);
    },

    editCheck: (state, action) => {
      state.listsData.map((list) => {
        if (list.id === action.payload) {
          list.isEdit = !list.isEdit;
        }
        return list;
      });
      storage.set("listsData", state.listsData);
    },

    saveEditTitle: (state, action) => {
      const { id, editTitle } = action.payload;
      state.listsData.map((list) => {
        if (list.id === id) {
          list.title = editTitle;
          list.isEdit = !list.isEdit;
        }
        return list;
      });
      storage.set("listsData", state.listsData);
    },

    removeItem: (state, action) => {
      const list_data = state.listsData.filter(
        (list) => list.id !== action.payload
      );
      state.listsData = list_data;
      storage.set("listsData", state.listsData);
    },
  },
});

export const {
  addTodoLists,
  completedTodoRemove,
  checkItem,
  editCheck,
  removeItem,
  saveEditTitle,
} = listsSlice.actions;
export default listsSlice.reducer;
