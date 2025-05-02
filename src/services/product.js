import apis from "../apis";
import axiosInstance from "../config/axios";

export const apiGetProduct = async ({ sort, limit }) => {
  try {
    const response = await axiosInstance.get(
      `${apis.productEndpoints.getAll}`,
      {
        params: {
          limit: limit || 10,
          sort: sort,
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
