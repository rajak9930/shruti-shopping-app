import React from "react";
import { useFetch } from "../hook/useFetch";
// import ProductCart from "../components/ProductCart";
import { CatApi } from "../apis/api.js";
import { Link } from "react-router-dom";
// import img1 from "../assets/img1.jpg"
// import Slider from "react-slick";
import { RiArrowRightSLine } from "react-icons/ri";
const Home = () => {
  const { apiData, loading, error } = useFetch(CatApi);

  // var settings = {
  //   dots: true,
  //   fade: true,
  //   lazyLoad: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  //   arrows: false,
  //   waitForAnimate: false,
  // };
  // console.log(apiData)

  return (
    <div className=" container">
      <div className="">
        <div className="">
          <ul className="border flex  flex-col">
            {loading ? (
              <span>loading...</span>
            ) : (
              <>
                {apiData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl font-medium uppercase border flex  items-center px-4 py-2"
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

        {/* Banner Section */}
        {/* <div className="homeslider1-rj">
      <Slider {...settings}>
        <div className="row slidehome1-rj1 py-5 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 slidehome1-rj">
            <div className="container">
              <div className="slidercnt1-rj">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white">
                  Unlock endless <br /> posibilities with <br /> our hardware
                  rentals
                </h2>
                <button className="text-lg shopbtn-rj mt-6 py-2 px-4 bg-white text-[#330065] font-extrabold rounded hover:bg-[#e6e6e6] transition duration-150 ease-out hover:ease-in">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="container">
              <div className="slidercnt1-rj">
              <img src={img1} alt="Hardware Rentals" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
       
       
      </Slider>
    </div>
   */}
        {/* <div className="col-9 px-3">
        <ProductCart/>
      </div> */}
      </div>
    </div>
  );
};

export default Home;
