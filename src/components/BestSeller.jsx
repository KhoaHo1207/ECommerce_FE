import React, { useEffect, useState } from "react";
import { apiGetProduct } from "../services/product";
import Product from "./Product";
import Slider from "react-slick";
const tabs = ["Best Sellers", "New Arrivals"];
const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    if (activeTab === 0) setProducts(bestSellers);
    if (activeTab === 1) setProducts(newProducts);
  }, [activeTab, bestSellers, newProducts]);
  return (
    <div>
      <div className="ml-[-32px] flex pb-4 text-[20px]">
        {tabs &&
          tabs.length > 0 &&
          tabs.map((tab, index) => {
            return (
              <span
                className={`cursor-pointer border-r px-8 font-semibold capitalize text-gray-400 ${activeTab === index ? "font-bold text-gray-900" : ""}`}
                key={index}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </span>
            );
          })}
      </div>
      <div className="mx-[10px] mt-4 border-t-2 border-main pt-4">
        <Slider {...settings}>
          {products.map((item, index) => (
            <Product
              key={index}
              product={item}
              isNew={activeTab === 0 ? false : true}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
