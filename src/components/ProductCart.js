import React from "react";
// import { useFetch } from "../hook/useFetch";
// import { ProductApi } from "../apis/api.js";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import {IoHeartOutline, IoEyeOutline } from "react-icons/io5";


const ProductCart = (props) => {
  const { image, title, price, id } = props.item;

  return (
    <div className=" w-full max-w-[400px] p-4 rounded-md ml-6 mt-6 h-auto">
      <Link to={`/details/${id}`} className="block text-center ">
        <div className="bg-gray-50 p-4 rounded-md mb-4 mx-auto">
          <img
            src={image}
            width={200}
            height={200}
            className="  w-40  object-cover mb-4 mx-auto  "
          />

          {/* heart Icon */}
      <div className=" right-2 text-xl text-black">
        <IoHeartOutline />
      </div>

      {/* Eyes Icon */}
      <div className=" right-2 text-xl text-black">
        <IoEyeOutline />
      </div>
     
    </div>
        

        <h6 className="text-lg font-bold text-black ">{title}</h6>
        <h5 className="text-xl font-semibold text-red-950">${price}</h5>
        <div className="flex justify-center space-x-1 mt-4">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaRegStar />
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
