import { configureStore } from "@reduxjs/toolkit";
import productCategoryReducer from "./slices/productCategorySlice";

export const store = configureStore({
  reducer: {
    productCategory: productCategoryReducer,
  },
});
