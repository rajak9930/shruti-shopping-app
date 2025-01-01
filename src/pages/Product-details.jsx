import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const Params = useParams();
  const [item, setItem] = useState();

  console.log(Params.id, "===========");

  useEffect(() => {
    getApiData();
  }, [Params]);

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

  
  // return <div>
  //   <h1>{item?.title}</h1>
  //   <h2>Price: ${item.price}</h2>
  // </div>;

  return (
    <div>
      {item ? (
        <>
          <h1>{item.title}</h1>

          <img src={item.image} alt={item.title}
            style={{width:'100%', maxWidth: "300px",height:'auto'}}
          />

          <h2>Price: ${item.price}</h2>

          <p>
            <strong>Description:</strong> {item.description}
          </p>

          <p>
            <strong>Rating:</strong> {item.rating?.rate} ({item.rating?.count}{" "}
            reviews)
             </p> 
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
