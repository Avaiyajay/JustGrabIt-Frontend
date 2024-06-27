import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 max-h-48 py-2 px-20 hover:shadow-2xl hover:shadow-grey-500">
        <div className="flex items-center justify-center rounded-md">
          <img
            src="/Images/airjordan1.png"
            className="max-h-44 h-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">Product Name</h1>
          <h1 className="text-center">Men's Shoe</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>
            <span className="px-4 font-extralight p-2 bg-gray-300 mr-3">-</span>
            5
            <span className="px-4 font-extralight p-2 bg-gray-300 ml-3">+</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">$150</div>
        <div className="flex flex-col items-center justify-center">
          <FaTrash icon="fa-duotone" className="text-2xl" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
