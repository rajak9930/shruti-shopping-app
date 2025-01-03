import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { BsTruck } from "react-icons/bs";
import { TiArrowSync } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";

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
    <div className="flex flex-col md:flex-row  bg-gray-50  gap-16 container mx-auto">
      {/* Left side */}
      <div className="w-full h-[650px] bg-gray-100 flex  mb-4 mx-auto items-center justify-center">
        {item ? (
          <img
            src={item.image}
            alt={item.title}
            className=" max-w-full max-h-full"
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center p-6 space-y-6">
        {item ? (
          <>
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <div className="flex items-center space-x-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaRegStar />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Price: ${item.price}
            </h2>
            <p className="text-gray-700">{item.description}</p>
            <hr className="border-t-2 border-gray-400 mt-6" />{" "}
            {/* Horizontal Line */}
            {/* BUTTON PART */}
            <div className="flex gap-10 items-center mt-4">
              <button className="flex items-center justify-between px-6 py-3 bg-white text-black rounded-md border border-gray-400 ">
                <span className="text-xl">-</span>
                <div className="border-l-2 border-gray-400 mx-4 h-6"></div>{" "}
                {/* Vertical Line */}
                <span className="text-xl">2</span>
                <div className="border-l-2 border-gray-400 mx-4 h-6 "></div>{" "}
                {/* Vertical Line */}
                <span className="text-xl">+</span>
              </button>

              {/* Buy Now Button */}
              <button className="text-xl w-40 px-6 py-4 bg-black text-white rounded-md ml-4 hover:bg-gray-700">
                Buy Now
              </button>

              <button className="bg-black  p-4 rounded-lg border border-gray-500 hover:bg-gray-700 transition duration-300">
                <FaRegHeart className="text-white text-2xl  " />
              </button>
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
