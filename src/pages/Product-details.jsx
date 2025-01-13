import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { BsTruck } from "react-icons/bs";
import { TiArrowSync } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";

const ProductDetails = () => {
  const Params = useParams();
  const [item, setItem] = useState();

  console.log(Params.id, "===========");

  useEffect(() => {
    getApiData();
  }, [Params.id]);

  const getApiData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${Params.id}`
      );
      console.log(res.data);
      setItem(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" grid sm:grid-cols-12  bg-gray-50  gap-16 container mx-auto ">
      {/* Left side */}
      <div className="sm:col-span-4 bg-gray-100 mb-4 flex items-center justify-center">
    {item ? (
      <div className="w-full max-w-[50%] md:max-w-[100%] mx-auto bg-gray-100 rounded-lg p-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-contain rounded-lg shadow-md"
        />
      </div>
    ) : (
      <p className="text-gray-500 text-sm font-medium">Loading...</p>
    )}
  </div>

      {/* Right side */}
      <div className=" sm:col-span-8  p-6 space-y-6">
        {item ? (
          <>
            <h1 className="text-4xl font-bold ">{item.title}</h1>
            <div className="flex flex-row">
              <Rate value={item.rating.rate} disabled allowHalf />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Price: ${item.price}
            </h2>
            <p className="text-gray-700">{item.description}</p>
            <hr className="border-t-2 border-gray-400 mt-6" />{" "}
            {/* Horizontal Line */}
            {/* BUTTON PART */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10  mt-4">
              <div className="">
              <button className="flex items-center justify-between px-6 py-3 bg-white text-black rounded-md border border-gray-400 ">
                <span className="text-xl">-</span>
                <div className="border-l-2 border-gray-400 mx-4 h-6"></div>{" "}
                {/* Vertical Line */}
                <span className="text-xl">2</span>
                <div className="border-l-2 border-gray-400 mx-4 h-6 "></div>{" "}
                {/* Vertical Line */}
                <span className="text-xl">+</span>
              </button>
              </div>
              {/* Buy Now Button */}
              <div className="">
              <button className="text-xl  px-6 py-4 bg-black text-white rounded-md  hover:bg-gray-700">
                Buy Now
              </button>
              </div>
              <div className="">
              <button className="bg-black  p-4 rounded-lg border border-gray-500 hover:bg-gray-700 transition duration-300">
                <FaRegHeart className="text-white text-2xl  " />
              </button>
            </div>
            </div>
            {/* Box  Free Delivery and Return Delivery */}
            <div className="p-4 mt-6 rounded-lg border border-gray-400 ">
              <div className="flex items-center space-x-2">
                <BsTruck className="text-gray-800 text-3xl" />
                <h4 className="text-lg font-bold text-gray-800">
                  Free Delivery
                </h4>
              </div>
              <p className="text-md ml-4 underline">
                Enter your postal code for Delivery Availability
              </p>

              <hr className="border-t-5 border-gray-400 my-4 w-full" />
              <div className="flex items-center space-x-2">
                <TiArrowSync className="text-gray-800 text-4xl" />
                <h4 className="text-lg font-bold text-gray-800">
                  Return Delivery
                </h4>
              </div>
              <p className="text-md ml-4">
                Free 30 Days Delivery Returns.Delails
              </p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
