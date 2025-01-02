import React from "react";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <nav className=" bg-black text-white flex  items-center justify-between px-4 py-10  ">
      <div className=" text-white font-bold text-4xl ">
        <a className="navbar-brand" href="#">
          H&M
        </a>
      </div>
      <div className="hidden  md:flex md:justify-center w-full" id="navbarText">
        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-center">
          <li>
            <NavLink
              to="/"
              className="text-white font-semibold text-xl hover:text-gray-400 transition duration-300 border-b-2   "
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className="text-white font-semibold text-xl hover:text-gray-400 transition duration-300 border-b-2 border-transparent hover:border-gray-400 pb-1"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="product"
              className="text-white font-semibold text-xl hover:text-gray-400 transition duration-300 border-b-2 border-transparent hover:border-gray-400 pb-1"
            >
              Product{" "}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"cart"}
              className="text-white font-semibold text-xl hover:text-gray-400 transition duration-300 border-b-2 border-transparent hover:border-gray-400 pb-1"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="What are looking for?"
          className="px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button className="bg-black-700 p-2 rounded-lg hover:bg-gray-600 transition duration-300">
          <HiMagnifyingGlass className="text-white text-2xl" />
        </button>
        
        <button className="bg-black-700 p-2 rounded-lg hover:bg-gray-600 transition duration-300">
        <IoHeartOutline className="text-white text-2xl"  />
        </button>

        <button className="bg-black-700 p-2 rounded-lg hover:bg-gray-600 transition duration-300">
        <LuShoppingCart className="text-white text-2xl"  />
        </button>
        
        
      </div>
    </nav>
  );
};

export default Header;
