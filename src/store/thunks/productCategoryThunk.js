import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetProductCategories } from "../../services/productCategory";

export const getProductCategories = createAsyncThunk(
  "productCategory/getProductCategories",
  async (data, { rejectWithValue }) => {
    const response = await apiGetProductCategories();
    console.log(response);

    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response);
    }
  },
);
