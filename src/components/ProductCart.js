import React, { useState } from "react";
import { useFetch } from "../hook/useFetch";
import { ProductApi } from "../apis/api.js";
import { Link, Links } from "react-router-dom";

const ProductCart = (props) => {
  const { image, title, price, id } = props.item;

  return (
    <div className="border shadow-sm rounded-md">
      <Link to={`/details/${id}`} className=" ">
        <img src={image} width={200} height={200} />
        <h6 className="">{title}</h6>
        
      </Link>
    </div>
  );
};

export default ProductCart;
