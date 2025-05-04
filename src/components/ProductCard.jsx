import React from "react";
import { renderStarFromMember } from "../utils/helper";

const ProductCard = ({ product }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-1 rounded-lg border p-4 transition-all duration-300 ease-in-out hover:scale-105">
      <img
        src={product.images[0]}
        alt={product.name}
        className="mb-2 h-[200px] w-full object-contain"
      />
      <p className="sitalic text-sm font-semibold text-gray-500">
        {product?.brand}
      </p>
      <h2 className="text-lg font-semibold">{product?.title}</h2>
      <p>{product?.price?.toLocaleString("vi-VN")} VNĐ</p>
      <span className="flex">
        {renderStarFromMember(product?.totalRatings)}
      </span>
    </div>
  );
};

export default ProductCard;
