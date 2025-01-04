import React, {useState} from 'react'
import ProductCart from './ProductCart';
const Rating = () => {
    const [rating, setRating] = useState(0); 

    const item = {
        id: 1,
        title: "Product Title",
        image: "image-url",
        price: 29.99,
        rating: {
          count: 120,
          average: 4.5,
        },
      };
  return (
    <div>
      
      <ProductCart item={item} rating={rating} setRating={setRating} />
    </div>
  )
}

export default Rating