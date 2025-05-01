import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetProductCategories } from "../../services/productCategory";
import { toast } from "react-toastify";

export const getProductCategories = createAsyncThunk(
  "productCategory/getProductCategories",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiGetProductCategories();
      if (!response.success) {
        toast.error("Something went wrong while getting categories");
        return rejectWithValue(response);
      }
      return response.data;
    } catch (error) {
      toast.error(
        error.message || "Something went wrong while getting categpries",
      );
      return rejectWithValue(
        error.response?.message ||
          error.message ||
          "Something went wrong while getting categpries",
      );
    }
  },
);
