import React from "react";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="border-y-8 min-h-screen border-black py-28 w-5/6">
          <div className="flex items-center justify-end gap-2 mb-4">
            <FaFilter />
            <span>Filter</span>
          </div>
          <section className="h-auto grid md:grid-cols-3 sm:grid-cols-2 gap-4 gap-y-8">
            <Link to="/product/1" className="w-full">
              <img src="/Images/airjordan1.png" alt="" />
              <p className="my-1 text-red-600">Bestseller</p>
              <h3 className="font-extrabold">Air Jordan 1</h3>
              <p className="text-gray-400">Men's Shoe</p>
              <p>$235</p>
            </Link>
            <a className="w-full">
              <img src="/Images/airmax.png" alt="" />
              <p className="my-1 text-red-600">Bestseller</p>
              <h3 className="font-extrabold">Air Max</h3>
              <p className="text-gray-400">Men's Shoe</p>
              <p>$200</p>
            </a>
            <a className="w-full">
              <img src="/Images/jordanlow.png" alt="" />
              <p className="my-1 text-red-600">Bestseller</p>
              <h3 className="font-extrabold">Jordan Spizike Law</h3>
              <p className="text-gray-400">Men's Shoe</p>
              <p>$210</p>
            </a>
            <a className="w-full">
              <img src="/Images/airjordan1.png" alt="" />
              <p className="my-1 text-red-600">Bestseller</p>
              <h3 className="font-extrabold">Air Jordan 1</h3>
              <p className="text-gray-400">Men's Shoe</p>
              <p>$235</p>
            </a>
            <a className="w-full">
              <img src="/Images/airmax.png" alt="" />
              <p className="my-1 text-red-600">Bestseller</p>
              <h3 className="font-extrabold">Air Max</h3>
              <p className="text-gray-400">Men's Shoe</p>
              <p>$200</p>
            </a>
            <a className="w-full">
              <img src="/Images/jordanlow.png" alt="" />
              <p className="my-1 text-red-600">Bestseller</p>
              <h3 className="font-extrabold">Jordan Spizike Law</h3>
              <p className="text-gray-400">Men's Shoe</p>
              <p>$210</p>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
