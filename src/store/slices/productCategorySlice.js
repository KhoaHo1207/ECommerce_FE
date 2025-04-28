import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetProductCategories } from "../../services/productCategory";
import * as actions from "../thunks/productCategoryThunk";
import { toast } from "react-toastify";
const initialState = {
  productCategories: [],
  loading: false,
  error: null,
};

const productCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getProductCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actions.getProductCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.productCategories = action.payload;
    });
    builder.addCase(actions.getProductCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      toast.error(action.error.message);
    });
  },
});

export default productCategorySlice.reducer;
