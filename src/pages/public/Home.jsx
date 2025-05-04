import React, { useEffect, useState } from "react";
import {
  Banner,
  BestSeller,
  Sidebar,
  FeatureProduct,
} from "../../components/index";
import DealDaily from "../../components/DealDaily";
const Home = () => {
  return (
    <>
      <div className="flex w-main">
        <div className="flex-auto flex w-[25%] flex-col gap-5">
          <Sidebar />
          <DealDaily />
        </div>
        <div className="flex-auto flex w-[75%] flex-col gap-5 pl-5">
          <Banner />
          <BestSeller />
        </div>
      </div>
      <div>
        <FeatureProduct />
      </div>
      <div className="h-[500px] w-full"></div>
    </>
  );
};

export default Home;
