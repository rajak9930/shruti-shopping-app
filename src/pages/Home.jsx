import React from "react";
import { useFetch } from "../hook/useFetch";
// import ProductCart from "../components/ProductCart";
import { CatApi } from "../apis/api.js";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";
const Home = () => {
  const { apiData, loading, error } = useFetch(CatApi);

  console.log(error);

  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container mx-auto   px-4 py-8">
      <div className=" grid sm:grid-cols-12 ">
        <div className="sm:col-span-4 w-full">
          <ul className="border-r-2 flex-col border-gray-200 pr-4 ">
            {loading ? (
              <span className="font-bold">loading...</span>
            ) : (
              <>
                {apiData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl font-medium uppercase  flex items-center px-4 py-6"
                    >
                      <Link to={`cat/${item}`} className="mr-2">
                        {item}
                      </Link>
                      <span>
                        <RiArrowRightSLine color="black" size={27} />
                      </span>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
        

        <div className="sm:col-span-4 w-full ">
          {/* <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-full h-auto">
                <img
                  src={image}
                  className="object-cover w-full"
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
