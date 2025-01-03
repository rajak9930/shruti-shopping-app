import React from "react";
import ProductCart from "../components/ProductCart";
import { useFetch } from "../hook/useFetch";
import { ProductApi } from "../apis/api";

const Product = () => {
  const { apiData, loading, error } = useFetch(ProductApi);

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
      {loading ? (
        <div className="font-bold">Loading...</div>
      ) : (
        <>
          {apiData.map((item) => (
            
            <ProductCart key={item.id} item={item} />
            
          ))}
        </>
      )}
    </div>
  );
};

export default Product;
