import React from "react";
import ProductCart from "../components/ProductCart";
import { useFetch } from "../hook/useFetch";
import { ProductApi } from "../apis/api";

const Product = () => {
  const { apiData, loading, error } = useFetch(ProductApi);

  return (
    // <div>Product</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 shadow-sm rounded-md  p-4 ">
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
