import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-8 px-4 ">
      {item ? (
        <div className="bg-white p-2 rounded-lg shadow-lg w-full sm-w:96 lg:w-1/2 text-center">
          <h1 className="text-2xl font-semibold mb-2">{item.title}</h1>

          <img
            src={item.image}
            alt={item.title}
            className="w-48 h-48 object-cover mx-auto mb-4"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          />

          <h2 className="text-xl text-black mb-4">Price:${item.price}</h2>

          <p className="text-black mb-4">
            <strong>Description:</strong> {item.description}
          </p>

          <p className="text-black">
            <strong>Rating:</strong> {item.rating?.rate} ({item.rating?.count}{" "}
            reviews)
          </p>
          <button className="bg-black text-white p-2 rounded  mt-6">
            Add To Cart
          </button>
        </div>
      ) : (
        <p className="font-bold">Loading...</p>
      )}
    </div>

   
  );
};

export default ProductDetails;
