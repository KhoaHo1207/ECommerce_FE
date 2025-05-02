import React, { useState } from "react";
import { formatCurrency } from "../utils/helper";
import Label from "../assets/label.png";
const NO_PRODUCT = "https://bepharco.com/no-products-found.png";
import { renderStarFromMember } from "../utils/helper";
import SelectOption from "./SelectOption";
import icons from "../utils/icon";
const { Heart, Menu, Eye } = icons;
const Items = [
  {
    icon: <Heart className="h-4 w-4" />,
    title: "Add to Wishlist",
    path: "/wishlist",
  },
  {
    icon: <Menu className="h-4 w-4" />,
    title: "Add to Compare",
    path: "/compare",
  },
  {
    icon: <Eye className="h-4 w-4" />,
    title: "Quick View",
    path: "/quick-view",
  },
];
const Product = ({ product, isNew }) => {
  const [isShowOption, setIsShowOption] = useState(false);
  return (
    <div className="w-full cursor-pointer px-[10px] text-base">
      <div
        className="flex w-full flex-col items-center justify-start border p-[15px]"
        onMouseEnter={(e) => {
          e.stopPropagation, setIsShowOption(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation, setIsShowOption(false);
        }}
      >
        <div className="relative w-full">
          {isShowOption && (
            <div className="animate-slide-top absolute bottom-[-10px] left-0 right-0 flex items-center justify-center gap-2">
              {Items.map((item, index) => {
                return (
                  <SelectOption key={index} icon={item.icon} path={item.path} />
                );
              })}
            </div>
          )}
          <img
            src={product?.images[0] || NO_PRODUCT}
            alt={product.title}
            className="obeject-cover h-[243px] w-[243px]"
          />
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
          <span className="flex h-4">
            {renderStarFromMember(product.totalRatings)}
          </span>
          <span>{formatCurrency(product?.price)} VNĐ</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Product;
