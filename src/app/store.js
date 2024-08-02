import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "../features/categories/categorySlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
  devTools: true,
});

export default store;
