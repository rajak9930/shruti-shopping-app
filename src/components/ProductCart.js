import React, { useState } from "react";
// import { useFetch } from "../hook/useFetch";
// import { ProductApi } from "../apis/api.js";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
const ProductCart = ({ item }) => {
  const { image, title, price, id } = item;

  console.log(item.rating.rate);

  return (
    <div className="p-4 rounded-md mt-6 h-auto">
      <Link to={`/details/${id}`} className="block text-center ">
        <div className="bg-gray-50 p-4 rounded-md mb-4 mx-auto group">
          <div className="bg-gray-50 p-4 rounded-md mb-4 mx-auto group relative">
            <div className="w-52 h-52 mx-auto relative group-hover:opacity-90 transition-all">
              <img
                src={image}
                className="w-full h-full object-contain"
                alt={title}
              />

              {/* Heart and Eye icons */}
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div className="text-xl text-black">
                  <IoHeartOutline />
                </div>
                <div className="text-xl text-black">
                  <IoEyeOutline />
                </div>
              </div>

              {/* Add to Cart button */}
              <button className="absolute inset-x-0 bottom-4 left-1/2 transform -translate-x-1/2 w-48 px-4 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <h6 className="text-lg font-bold text-black text-one-line ">{title}</h6>
        <h5 className="text-xl font-semibold text-red-950">${price}</h5>
        <div className="flex flex-row justify-center items-center">
          <Rate value={item.rating.rate} disabled allowHalf />
          <span>({item.rating.count})</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
