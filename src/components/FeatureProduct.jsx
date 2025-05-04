import React, { useEffect, useState } from "react";
import { apiGetProduct } from "../services/product";
import { toast } from "react-toastify";
import { renderStarFromMember } from "../utils/helper";
import ProductCard from "./ProductCard";

const FeatureProduct = () => {
  const [featureProducts, setFeatureProducts] = useState([]);

  const fetchFeatureProduct = async () => {
    const response = await apiGetProduct({ limit: 9, sort: "-totalRatings" });
    if (response.success) {
      setFeatureProducts(response?.data);
      console.log(response?.data);
    } else {
      toast.error("Error fetching feature product data");
    }
  };

  useEffect(() => {
    fetchFeatureProduct();
  }, []);

  return (
    <>
      <h1 className="my-5 text-2xl font-bold">Feature Products</h1>
      <div className="my-5 h-[1px] w-full bg-main"></div>
      {featureProducts && featureProducts.length > 0 ? (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {featureProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div>No featured products found</div>
      )}

      {/* Banners */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.jpg?v=1613166661"
          alt="Banner"
          className="h-auto w-full rounded object-cover"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-5">
            <img
              src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-bottom-home2_400x.jpg?v=1613166661"
              alt=""
              className="h-auto w-full rounded object-cover"
            />
            <img
              src="https://digital-world-2.myshopify.com/cdn/shop/files/banner3-bottom-home2_400x.jpg?v=1613166661"
              alt=""
              className="h-auto w-full rounded object-cover"
            />
          </div>
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.jpg?v=1613166661"
            alt=""
            className="h-auto w-full rounded object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
