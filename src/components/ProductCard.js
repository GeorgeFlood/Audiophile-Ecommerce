import React from "react";
import IconArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";

const ProductCard = ({ productName, productImage }) => {
  return (
    <div className="border-5 border-red-200 bg-slate-200 rounded relative mb-24">
      <img
        className="relative bottom-14 h-44 m-auto"
        src={productImage}
        alt={productName}
      />
      <h3 className="text-center font-bold">{productName}</h3>
      <div className="py-2 flex justify-center align-center">
        <p className="text-center px-2 text-slate-500 weight-light cursor-pointer">
          SHOP
        </p>
        <img
          src={IconArrowRight}
          alt="arrow-right"
          height="10"
          width="10"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductCard;
