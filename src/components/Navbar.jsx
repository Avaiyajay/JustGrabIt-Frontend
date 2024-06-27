import React from "react";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex absolute bg-white-500 px-52 text-black py-5 items-center justify-between w-full">
        <div className="capitalize tracking-normal hover:tracking-widest font-extrabold	text-2xl">
          <Link to="/">LOGO</Link>
        </div>
        <div className="flex">
          <ul className="flex gap-10">
            <li>
              <Link to="/all">All</Link>{" "}
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <FaSearch />
          <FaUserCircle />
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
