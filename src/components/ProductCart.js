import React, { useState } from "react";
import { useFetch } from "../hook/useFetch";
import { ProductApi } from "../apis/api.js";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const { apiData, loading, error } = useFetch(ProductApi);
  

  return (
    <div>
      {/* <h4>Product item</h4> */}
      <div className="row">
        {loading ? (
          <span>Loading ...</span>
        ) : (
          apiData.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-one-line">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                 <div className="  ">
                 <button className="btn btn-primary">Add to Cart</button>
                 <Link to={`details/${product.id}`} className="btn btn-primary mx-3">Details</Link>
                 </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCart;

