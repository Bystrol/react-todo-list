import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    items: [],
    formIsVisible: false,
    changed: false,
  },
  reducers: {
    addTask(state, action) {
      state.items.push(action.payload);
      state.changed = true;
    },
    toggleForm(state) {
      state.formIsVisible = !state.formIsVisible;
    },
    editTask(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];

      // let updatedItems;

      const updatedItem = {
        id: existingItem.id,
        title: action.payload.title,
        description: action.payload.description,
      };

      // updatedItems = [...state.items];
      // updatedItems[existingItemIndex] = updatedItem;

      state.items[existingItemIndex] = updatedItem;

      // state.items = updatedItems;
      state.changed = true;
    },
    deleteTask(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.changed = true;
    },
    replaceTasks(state, action) {
      state.items = action.payload;
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice;
