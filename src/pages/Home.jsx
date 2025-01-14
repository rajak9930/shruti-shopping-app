// import React from "react";
// import { useFetch } from "../hook/useFetch";

// import { CatApi } from "../apis/api.js";
// import { Link } from "react-router-dom";
// import { RiArrowRightSLine } from "react-icons/ri";
// import Slider from "react-slick";
// const Home = () => {
//   const { apiData, loading, error } = useFetch(CatApi);

//   console.log(error);

//   const images = [
//     "/images/img1.jpg",
//     "/images/img2.jpg",
//     "/images/img3.jpg",
//     "/images/img4.jpg",
//   ];
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };
//   return (
//     <div className="container mx-auto   px-4 py-8">
//       <div className=" grid sm:grid-cols-12 ">
//         <div className="sm:col-span-4 w-full">
//           <ul className="border-r-2 flex-col border-gray-200 pr-4 ">
//             {loading ? (
//               <span className="font-bold">loading...</span>
//             ) : (
//               <>
//                 {apiData.map((item, index) => {
//                   return (
//                     <li
//                       key={index}
//                       className="text-xl font-medium uppercase  flex items-center px-4 py-6"
//                     >
//                       <Link to={`cat/${item}`} className="mr-2">
//                         {item}
//                       </Link>
//                       <span>
//                         <RiArrowRightSLine color="black" size={27} />
//                       </span>
//                     </li>
//                   );
//                 })}
//               </>
//             )}
//           </ul>
//         </div>
        

        

         
//          <div className="sm:col-span-8 w-full relative h-full">
//           <div className="bg-black text-white p-8 rounded-lg h-full flex flex-col justify-center">
            
//           </div>
//           <img
//             src="/images/img1.jpg" 
//             alt="iPhone 14"
//             className="absolute top-0 right-0 w-full h-full object-contain flex flex-col justify-center"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from "react";
import { useFetch } from "../hook/useFetch";
import { CatApi } from "../apis/api.js";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Fetch data using custom hook
  const { apiData, loading, error } = useFetch(CatApi);

  console.log(error);

  // Images for the slider
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        {/* {/ Sidebar for categories /} */}
        <div className="sm:col-span-3">
          <ul className="border-r-2 flex flex-col border-gray-200 pr-4">
            {loading ? (
              <span className="font-bold">Loading...</span>
            ) : (
              <>
                {apiData.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl font-medium uppercase flex items-center px-4 py-6"
                  >
                    <Link to={`cat/${item}`} className="mr-2">
                      {item}
                    </Link>
                    <span>
                      <RiArrowRightSLine color="black" size={27} />
                    </span>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>

        {/* {/ Slider section /} */}
        <div className="sm:col-span-9">
          <Slider {...settings}>
            {images.map((images, index) => (
              <div key={index} className="w-full h-[370px]">
                <img
                  src={images}
                  className="object-fill w-full h-full"
                  alt={`Images ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;



