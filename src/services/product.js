import apis from "../apis";
import axiosInstance from "../config/axios";

export const apiGetProduct = async ({ sort }) => {
  try {
    const response = await axiosInstance.get(
      `${apis.productEndpoints.getAll}`,
      {
        params: {
          sort,
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error.message || "Something went gone while getting products");
    throw new Error(
      error.message || "Something went gone while getting products",
    );
  }
};
