import React from "react";
import { Banner, Sidebar } from "../../components/index";
const Home = () => {
  return (
    <div className="flex w-main">
      <div className="flex w-[25%] flex-auto flex-col gap-5 border">
        <Sidebar />
        <span>Deal daily</span>
      </div>
      <div className="flex w-[75%] flex-auto flex-col gap-5 border pl-5">
        <Banner />
        <span>Best Seller</span>
      </div>
    </div>
  );
};

export default Home;
