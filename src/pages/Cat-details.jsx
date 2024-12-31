import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CatDetails = () => {
  const Param = useParams();

  useEffect(() => {
    getApiData();
  }, [Param]);

  const getApiData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${Param.cat}`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return <div>Cat-details</div>;
};

export default CatDetails;
