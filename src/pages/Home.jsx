import React from "react";
import { useFetch } from "../hook/useFetch";
import ProductCart from "../components/ProductCart";
import { CatApi } from "../apis/api.js";
import { Link } from "react-router-dom";

const Home = () => {
  const { apiData, loading, error } = useFetch(
   CatApi
  );
  // console.log(apiData)

 
  
  return (
    <div className="container-fluid">
    <div className="row g-0">
      <div className="col-3">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            An active item
          </li>

          {loading ? (
            <span>loading...</span>
          ) : (
            <>
              {apiData.map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    <Link to={`cat/${item}`}>{item}</Link>
                    
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>

      <div className="col-9 px-3">
        <ProductCart/>
      </div>
    </div>
    </div>
  );
};

export default Home;
