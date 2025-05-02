import React from "react";
import { NavLink } from "react-router-dom";

const SelectOption = ({ icon, path }) => {
  return (
    <NavLink
      to={path}
      className="rounded-full border border-gray-400 bg-white p-2 hover:bg-main hover:text-white"
    >
      <span>{icon}</span>
    </NavLink>
  );
};

export default SelectOption;
