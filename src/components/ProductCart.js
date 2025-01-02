import React from "react";
// import { useFetch } from "../hook/useFetch";
// import { ProductApi } from "../apis/api.js";
import { Link } from "react-router-dom";

const ProductCart = (props) => {
  const { image, title, price, id } = props.item;

  return (
    <div className="mt-10 border shadow-md rounded-md w-96 ml-24 ">
      <Link to={`/details/${id}`} className="block text-center ">
        <img src={image} width={200} height={200}  className="w-48 h-50 object-cover mb-4 mx-auto block " />
        <h5 className="text-xl font-semibold">Price: ${price}</h5>
        <h6 className="text-lg">{title}</h6>
        
      </Link>
    </div>
  );
};


export default ProductCart;
