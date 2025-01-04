import React from "react";
import { useFetch } from "../hook/useFetch";
// import ProductCart from "../components/ProductCart";
import { CatApi } from "../apis/api.js";
import { Link } from "react-router-dom";
// import img1 from "../assets/img1.jpg"
// import Slider from "react-slick";
import { RiArrowRightSLine } from "react-icons/ri";
// import Swiper from "swiper";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
const Home = () => {
  const { apiData, loading, error } = useFetch(CatApi);

  console.log(error);

  // const images = [
  //   "/images/img1.jpg",
  //   "/images/img2.jpg",
  //   "/images/img3.jpg",
  //   "/images/img4.jpg",
  // ];
  return (
    <div className=" container">
      <div className="flex flex-col items-start">
        <div className="">
          <ul className=" flex  flex-col border-r-2 border-gray-200 pr-4 ">
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
      </div>

      {/* Slider side */}

      {/* <div className="mt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          navigation
          Pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-96 h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4">
          <div className="swiper-pagination"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
