import React from "react";
import { formatCurrency } from "../utils/helper";
import Label from "../assets/label.png";
const NO_PRODUCT = "https://bepharco.com/no-products-found.png";
const Product = ({ product, isNew }) => {
  return (
    <div className="w-full px-[10px] text-base">
      <div className="flex w-full flex-col items-center justify-start border p-[15px]">
        <div className="relative w-full">
          <img
            src={product?.images[0] || NO_PRODUCT}
            alt={product.title}
            className="obeject-cover h-[243px] w-[243px]"
          />
          {/* <img
            src={Label}
            alt="label"
            className="absolute right-[-30px] top-[-15px] h-[40px] w-[100px]"
          /> */}
          <div
            className={`z-2 absolute right-[-10px] top-[-5px] h-[30px] w-[100px] rounded-md border ${isNew ? "bg-red-600" : "bg-slate-600"}`}
          ></div>
          <span
            className={`absolute ${isNew ? "right-[15px]" : "right-0"} top-0 font-bold capitalize text-white`}
          >
            {isNew ? "NEW" : "TRENDING"}
          </span>
        </div>
        <div className="mt-[15px] flex w-full flex-col items-start gap-1">
          <span className="line-clamp-1">{product?.title}</span>
          <span>{formatCurrency(product?.price)} VNĐ</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Product;
