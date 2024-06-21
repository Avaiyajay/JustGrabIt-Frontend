import React from "react";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex absolute bg-white-500 px-52 text-black py-5 items-center justify-between w-full">
        <div className="capitalize tracking-normal hover:tracking-widest font-extrabold	text-2xl">
          LOGO
        </div>
        <div className="flex">
          <ul className="flex gap-10">
            <li>All</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="flex gap-10">
          <FaSearch />
          <FaUserCircle />
          <FaShoppingCart />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
