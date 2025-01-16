import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoHeartOutline,IoPersonOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-black text-white text-center py-2">
        <p className="text-base">
          Summer Sale For All Swin Suits And Express Delivery-OFF 50%{" "}
          <span className="font-bold text-normal underline">Shop Now</span>
        </p>
      </div>

      <nav className=" bg-white text-black px-4 py-5 flex  items-center justify-between relative">
        <div className=" text-black font-bold text-4xl ">
          <Link to="/" className="navbar-brand" href="#">
            H&M
          </Link>
        </div>
        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-black text-3xl focus:outline-none"
          >
            <HiMenuAlt3 />
          </button>
        </div>
        <div className="hidden  md:flex md:justify-center w-auto">
          <ul className="flex flex-row md:space-x-6 text-center">
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
        <div className="hidden md:flex items-center space-x-4">
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

          <button className="bg-black-700 p-2 rounded-lg hover:bg-gray-600 transition duration-300">
            <IoPersonOutline className="text-black text-2xl" />
          </button>
        
        </div>
      </nav>

      {/*Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black text-3xl focus:outline-none"
          >
            <HiX />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-black font-semibold text-lg hover:text-gray-800 transition duration-300 uppercase ${
                  isActive ? "border-b-2 border-black" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-black font-semibold text-lg hover:text-gray-800 transition duration-300 uppercase ${
                  isActive ? "border-b-2 border-black" : ""
                }`
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-black font-semibold text-lg hover:text-gray-800 transition duration-300 uppercase ${
                  isActive ? "border-b-2 border-black" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <hr className="border-t-2 border-gray-300" />
    </>
  );
};

export default Header;
