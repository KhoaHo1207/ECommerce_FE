import React from "react";
import { Banner, Sidebar } from "../../components/index";
const Home = () => {
  return (
    <div className="flex w-main">
      <div className="flex w-[30%] flex-auto flex-col gap-5 border">
        <Sidebar />
        <span>Siuuuuu</span>
      </div>
      <div className="flex w-[70%] flex-auto flex-col gap-5 border pl-5">
        <Sidebar />
        <span>Siuuuuu</span>
      </div>
    </div>
  );
};

export default Home;
