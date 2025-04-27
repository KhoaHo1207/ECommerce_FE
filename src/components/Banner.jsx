import React from "react";
import BannerHomepage from "../assets/Banner.webp";
const Banner = () => {
  return (
    <div className="w-full">
      <img
        src={BannerHomepage}
        alt="Banner"
        className="w-full object-contain"
      />
    </div>
  );
};

export default Banner;
