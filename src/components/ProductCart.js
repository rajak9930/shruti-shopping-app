import React from "react";
// import { useFetch } from "../hook/useFetch";
// import { ProductApi } from "../apis/api.js";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";

const ProductCart = ({ item }) => {
  const { image, title, price, id } = item;

  return (
    <div className="p-4 rounded-md mt-6 h-auto">
      <Link to={`/details/${id}`} className="block text-center ">
        <div className="absolute">
          <div className=" right-2 text-xl text-black  ">
            <IoHeartOutline />
          </div>

          {/* Eyes Icon */}
          <div className=" right-2 text-xl text-black ">
            <IoEyeOutline />
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-md mb-4 mx-auto">
          <div className="w-48 h-48 bg-gray-100 flex  mb-4 mx-auto">
            <img src={image} className="max-w-full max-h-full object-contain" />
          </div>

          {/* heart Icon */}
        </div>

        <h6 className="text-lg font-bold text-black text-one-line ">{title}</h6>
        <h5 className="text-xl font-semibold text-red-950">${price}</h5>
        <div className="flex justify-center flex-row">
          <div className="flex justify-center space-x-1 items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaRegStar />
          </div>
          ({item.rating.count})
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
