import axiosInstance from "../config/axios";
import apis from "../apis/index";
import { toast } from "react-toastify";
const apiGetProductCategories = async () => {
  try {
    const response = await axiosInstance.get(
      `${apis.productCategoryEndpoints.getAll}`,
    );
    return response;
  } catch (error) {
    console.log(
      error.message || "Something went wrong while getting categories",
    );
    throw new Error(error);
  }
};

export { apiGetProductCategories };
