import React, { useEffect, useState } from "react";
import { apiGetProduct } from "../services/product";
import Product from "./Product";
import Slider from "react-slick";
const tabs = ["Best Sellers", "New Arrivals", "Tablets"];
const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [isActiveTab, setIsActiveTab] = useState(0);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, //số lượng show
    slidesToScroll: 1, //lướt qua bao nhiêu item
  };

  const fetchProducts = async () => {
    const response = await Promise.all([
      apiGetProduct({ sort: "-sold" }),
      apiGetProduct({ sort: "-createdAt" }),
    ]);
    if (response[0]?.success) setBestSellers(response[0].data);
    if (response[1]?.success) setNewProducts(response[1].data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="mt-5 flex gap-8 border-b-2 border-main pb-4 text-[20px]">
        {tabs &&
          tabs.length > 0 &&
          tabs.map((tab, index) => {
            return (
              <span
                className={`cursor-pointer border-r pr-8 font-semibold capitalize text-gray-400 ${isActiveTab === index ? "font-bold text-black" : ""}`}
                key={index}
                onClick={() => setIsActiveTab(index)}
              >
                {tab}
              </span>
            );
          })}
      </div>
      <div className="mt-4">
        <Slider {...settings}>
          {bestSellers?.map((item, index) => (
            <Product key={index} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
