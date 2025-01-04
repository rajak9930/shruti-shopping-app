import React from "react";
import { NavLink,Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="bg-black text-white text-center py-2">
        <p className="text-base">
          Summer Sale For All Swin Suits And Express Delivery-OFF 50%{" "}
          <span className="font-bold text-normal underline">Shop Now</span>
        </p>
      </div>

      <nav className=" bg-white text-black flex  items-center justify-between px-4 py-5  ">
        <div className=" text-black font-bold text-4xl ">
          <Link to="/" className="navbar-brand" href="#">
            H&M
          </Link>
        </div>
        <div
          className="hidden  md:flex md:justify-center w-full"
          id="navbarText"
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-black font-semibold text-base hover:text-gray-800 transition duration-300 uppercase ${
                    isActive ? "border-b-2 border-black" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
         
            <li>
              <NavLink
                to="product"
                className={({ isActive }) =>
                  `text-black font-semibold text-base hover:text-gray-800 transition duration-300 uppercase ${
                    isActive ? "border-b-2 border-black" : ""
                  }`
                }
              >
                product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `text-black font-semibold text-base hover:text-gray-800 transition duration-300 uppercase ${
                    isActive ? "border-b-2 border-black" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What are looking for?"
            className="px-4 py-2 rounded-lg bg-white text-black placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-gray-800 border border-spacing-80"
          />
          <button className="bg-black-700 p-2 rounded-lg hover:bg-gray-600 transition duration-300">
            <HiMagnifyingGlass className="text-black text-2xl" />
          </button>

          <button className="bg-black-700 p-2 rounded-lg hover:bg-gray-600 transition duration-300">
            <IoHeartOutline className="text-black text-2xl" />
          </button>

          <button className="bg-black-700 p-2 rounded-lg hover:bg-gray-600 transition duration-300">
            <LuShoppingCart className="text-black text-2xl" />
          </button>
        </div>
      </nav>
      <hr  className="border-t-2 border-gray-300"/>
    </>
  );
};

export default Header;
