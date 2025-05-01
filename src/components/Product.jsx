import React from "react";

const Product = ({ data }) => {
  console.log(data);

  return (
    <div className="w-1/3">
      <img src={data?.images[0] || ""} alt={data.title} />
    </div>
  );
};

export default Product;
