import React, { useState }  from "react";
// import { useFetch } from "../hook/useFetch";
// import { ProductApi } from "../apis/api.js";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
// import { Rate } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

const ProductCart = ({ item ,rating,setRating}) => {
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

        <div className="bg-gray-50 p-4 rounded-md mb-4 mx-auto group">
          <div
            className="w-52 h-64 bg-cover bg-center mb-4 mx-auto relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* <img
              src={image}
              className="max-w-full max-h-full object-contain "
              alt={title}
            /> */}

            <button className="absolute inset-x-0 bottom-0 left-1/2 transform -translate-x-1/2 w-56 px-4 py-2 bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity ">
              ADD TO CART
            </button>
          </div>
        </div>

        <h6 className="text-lg font-bold text-black text-one-line ">{title}</h6>
        <h5 className="text-xl font-semibold text-red-950">${price}</h5>
        
        {/* <div className="mt-2">
          <Rate
            defaultValue={rating}
            allowHalf
            size="lg"
            onChange={(value) => setRating(value)} // Update rating on change
            className="text-yellow-400"
          />
          <span className="text-gray-400 ml-2">({item.rating.count})</span>
        </div> */}



       
      </Link>
    </div>
  );
};

export default ProductCart;
