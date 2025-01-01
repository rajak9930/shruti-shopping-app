import React from "react";
import ProductCart from "../components/ProductCart";
import { useFetch } from "../hook/useFetch";
import { ProductApi } from "../apis/api";

const Product = () => {
  const { apiData, loading, error } = useFetch(ProductApi);

  return (
    // <div>Product</div>
    <div className="">
      {loading ? (
        <div>Loading...</div>
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
