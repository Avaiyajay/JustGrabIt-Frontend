import React from "react";

import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="grid grid-cols-5 gap-4 max-h-48 py-2 px-20 mt-5 pb-4  border-t-2 border-b-2 border-black">
        <div className="text-center flex items-center justify-center">
          Total
        </div>
        <div></div>
        <div className="text-center flex items-center justify-center">
          10 Itmes
        </div>
        <div className="text-center flex items-center justify-center">$500</div>
        <div className="text-center flex items-center justify-center">
          <button className="px-10 py-4 rounded-md bg-green-300">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
