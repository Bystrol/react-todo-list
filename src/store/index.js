import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: { form: formSlice.reducer, modal: modalSlice.reducer },
});

export default store;
