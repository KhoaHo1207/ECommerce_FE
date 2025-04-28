import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiGetProductCategories } from "../services/productCategory";
import Spin from "../components/Loading/Spin";
import { createSlug } from "../utils/helper";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../store/thunks/productCategoryThunk";
const Sidebar = () => {
  const { productCategories, loading, error } = useSelector(
    (state) => state.productCategory,
  );
  // const fetchCategories = async () => {
  //   if (response) {
  //     setProductCategories(response);
  //     setLoading(false);
  //   } else {
  //     setTimeout(() => {
  //       setLoading(false);
  //       toast.error("Cannot fetch categories");
  //     }, [5000]);
  //   }
  //   return;
  // };
  // useEffect(() => {
  //   fetchCategories();
  // }, []);
  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
          {productCategories && productCategories.length > 0 ? (
            <div className="flex flex-col border">
              {productCategories.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={`/category/${createSlug(item.title)}`}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-main px-5 pb-[14px] pt-[15px] text-sm text-white hover:text-main"
                        : "px-5 pb-[14px] pt-[15px] text-sm hover:text-main"
                    }
                  >
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
          ) : (
            <div>No product category found</div>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;
