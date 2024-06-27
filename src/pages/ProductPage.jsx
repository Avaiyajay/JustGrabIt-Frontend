import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductPage = () => {
  const sizes = ["US 5", "US 6", "US 7", "US 8", "US 9"];
  const [selectedSize, setSelectedSize] = useState(null);

  console.log(selectedSize, "SelectedSize");
  const handleAddToCart = () => {
    if (!selectedSize) {
      return toast.error("Please select size");
    }
    console.log("Product Added to cart");
  };
  return (
    <div className="flex items-center justify-end gap-2 mb-4">
      <section className="h-auto flex w-full pl-32">
        <div>
          <img src="/Images/airjordan1.png" alt="" className="rounded-lg" />
        </div>
        <div className="pl-20">
          <h1 className="text-2xl font-semibold">Product Name</h1>
          <p className="mt-2 font-semibold">Men's Shoe</p>
          <p className="mt-3 font-semibold">$150</p>
          <p className="mt-6 font-semibold">Select Sizes</p>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {sizes.map((size) => {
              return (
                <div
                  onClick={() => setSelectedSize(() => size)}
                  className={`cursor-pointer border border-black ${
                    size == selectedSize ? "bg-black text-white" : ""
                  } rounded px-7 py-2 text-center hover:bg-black hover:text-white`}
                >
                  {size}
                </div>
              );
            })}
          </div>
          <div className="mt-7">
            <div className="mb-10">
              <p className="max-w-80">
                Created for the hardwood but taken to the streets, the Nike Dunk
                Low Retro returns with crisp overlays and original team colours.
                This basketball icon channels '80s vibes with premium leather in
                the upper that looks good and breaks in even better. Modern
                footwear technology helps bring the comfort into the 21st
                century.
              </p>
            </div>
            <Link
              to="/cart"
              className="bg-black text-white rounded-full px-10 py-5"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
