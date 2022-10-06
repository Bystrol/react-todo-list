import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsVisible: false,
    titleToEdit: null,
    descToEdit: null,
    itemId: null,
  },
  reducers: {
    toggleModal(state) {
      state.modalIsVisible = !state.modalIsVisible;
    },
    setNewValues(state, action) {
      state.titleToEdit = action.payload.title;
      state.descToEdit = action.payload.description;
      state.itemId = action.payload.id;
    },
  },
});

export default modalSlice;
export const modalActions = modalSlice.actions;
