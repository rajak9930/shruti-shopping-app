import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const Params = useParams();
  const [item,setItem]=useState()

  console.log(Params.id, "===========");

  useEffect(() => {
    getApiData();
  }, [Params]);

  const getApiData =async () => {
    try {
      const res =await axios.get(`https://fakestoreapi.com/products/${Params.id}`);
      console.log(res.data);
      setItem(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  return <div>
    <h1>{item?.title}</h1>
  </div>;
};

export default ProductDetails;
