import React, { memo, useEffect, useState } from "react";
import icons from "../utils/icon";
import { apiGetProduct } from "../services/product";
import { toast } from "react-toastify";
import { formatCurrency, renderStarFromMember } from "../utils/helper";
import Countdown from "./Countdown";
const { Star, Menu } = icons;

const NO_PRODUCT = "https://bepharco.com/no-products-found.png";
const DealDaily = () => {
  const [dealdaily, setDealdaily] = useState(null);
  const targetTime = new Date("2025-10-10T10:25:20").getTime();
  const fetchDealDaily = async () => {
    const response = await apiGetProduct({ limit: 1, sort: "-totalRatings" });
    if (response.success) {
      setDealdaily(response?.data[0]);
    } else {
      console.log("Error fetching deal daily data");
      toast.error("Error fetching deal daily data");
      return;
    }
    console.log(response?.data[0]);
  };

  useEffect(() => {
    fetchDealDaily();
  }, []);
  return (
    <div className="h-full w-full border p-3">
      <h3 className="flex items-center justify-around">
        <span className="flex-2">
          <Star className="fill-red-500 text-red-500" size={20} />
        </span>
        <span className="mx-2 flex-4 text-center text-2xl font-bold">
          Deal Daily
        </span>
        <span className="flex-2"></span>
      </h3>
      <div className="flex w-full flex-col items-center justify-center gap-2 pt-8">
        <img
          src={dealdaily?.thumb || NO_PRODUCT}
          alt={dealdaily?.title}
          className="w-full object-contain"
        />
        <span className="line-clamp-1">{dealdaily?.title}</span>
        <span className="flex h-4">
          {renderStarFromMember(dealdaily?.totalRatings)}
        </span>
        <span>{formatCurrency(dealdaily?.price)} VNĐ</span>
        <Countdown targetTime={targetTime} />
        <button className="flex w-2/3 items-center justify-center gap-2 rounded-sm bg-main p-3 text-white shadow-sm hover:bg-main/80">
          <Menu className="h-4 w-4" />
          <span>Show more</span>
        </button>
      </div>
    </div>
  );
};

export default memo(DealDaily);
