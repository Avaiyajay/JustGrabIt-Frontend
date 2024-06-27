import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full">
        <div className="border-y-8 min-h-screen border-black py-28 w-5/6">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default Layout;
