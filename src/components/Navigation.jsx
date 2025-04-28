import React from "react";
import { navigation } from "../utils/contants";
import { NavLink } from "react-router-dom";
import icons from "../utils/icon";
const notActivedStyle = "";
const activedStyle = "";
const Navigation = () => {
  return (
    <div className="mb-6 flex h-[48px] w-main items-center border-y py-2 text-sm">
      {navigation &&
        navigation.length > 0 &&
        navigation.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "pr-12 text-main hover:text-main"
                  : "pr-12 hover:text-main"
              }
            >
              {item.value}
            </NavLink>
          );
        })}
    </div>
  );
};

export default Navigation;
