import React from "react";
import Logo_Content_NoBackground from "../assets/Logo_Content_NoBackground.png";
import icons from "../utils/icon";
import { Link } from "react-router-dom";
import path from "../utils/path";
const Header = () => {
  return (
    <div className="flex h-[110px] w-main justify-between border py-[35px]">
      <Link to={`${path.HOME}`}>
        <img
          src={Logo_Content_NoBackground}
          alt="ShopeShere"
          className="w-[150px] object-contain"
        />
      </Link>
      <div className="flex text-[13px]">
        <div className="flex flex-col items-center border-r px-6">
          <span className="flex items-center gap-4">
            <icons.Phone color="#517FA1" />
            <span className="font-semibold">(+84) 901352651</span>
          </span>
          <span>Mon-Sat 9:00AM - 8:00PM</span>
        </div>
        <div className="flex flex-col items-center border-r px-6">
          <span className="flex items-center gap-4">
            <icons.Mail color="#517FA1" />
            <span className="font-semibold">khoaho120703@gmail.com</span>
          </span>
          <span>Online Support 24/7</span>
        </div>

        <div className="flex items-center justify-center gap-2 border-r px-6">
          <icons.ShoppingCart color="#517FA1" />
          <span>0 items(s)</span>
        </div>
        <div className="flex items-center justify-center px-6">
          <icons.User color="#517FA1" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
