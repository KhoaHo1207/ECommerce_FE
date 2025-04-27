import React, { useEffect } from "react";
import { apiGetProductCategories } from "../services/productCategory";

const Sidebar = () => {
  const fetchCategories = async () => {
    const response = await apiGetProductCategories();
    console.log(response);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return <div>Sidebar</div>;
};

export default Sidebar;
