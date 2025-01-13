import React from "react";
import { FaLocationArrow } from "react-icons/fa";

import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { LiaInstagram, LiaLinkedinIn } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-20 py-20 mt-20 items-start gap-4 bg-black text-white"> 
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl mb-8 ">Exclusive</h1>
          <ul className="space-y-2">
            <li className="text-white text-xl font-semibold mb-4">Subscribe</li>
            <li className="text-white font-medium">
              Get 10% off your first order
            </li>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2  bg-black text-white placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-gray-800 border border-spacing-80 w-full pr-10"
              />
              <FaLocationArrow className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl mb-8">Support</h1>
          <ul className="space-y-2">
            <li className="text-white text-xl  mb-4 ">
              111 Bijoy sarani,Dhaka,
              <br />
              DH 1515,Bangladesh.
            </li>
            <li className="text-white text-xl p-2  ">exclusive@gmail.com</li>
            <li className="text-white text-xl">+88015-88888-9999</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl mb-8">Account</h1>
          <ul className="space-y-2">
            <li className="text-white text-xl  mb-4 ">My Account</li>
            <li className="text-white text-xl ">Login / Register</li>
            <li className="text-white text-xl">Cart</li>
            <li className="text-white text-xl">Wishlist</li>
            <li className="text-white text-xl">Shop</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl mb-8">Quick Link</h1>
          <ul className="space-y-2">
            <li className="text-white text-xl  mb-4 ">Privacy Policy</li>
            <li className="text-white text-xl ">Terms Of Use</li>
            <li className="text-white text-xl">FAQ</li>
            <li className="text-white text-xl">Contact</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl mb-8">Download App</h1>
          <ul className="space-y-2">
            <li className="text-gray-500 text-xl  mb-4 ">
              Save $3 with App New User Only
            </li>
            <div className="flex items-center gap-4">
              <img src="/images/qr-code.png" alt="" />

              <img src="/images/google.png" alt="" />
            </div>
            <div className="flex items-center gap-6">
              <RiFacebookLine className="text-white text-4xl mt-4" />
              <CiTwitter className="text-white text-4xl mt-4" />
              <LiaInstagram className="text-white text-4xl mt-4" />
              <LiaLinkedinIn className="text-white text-4xl mt-4" />
            </div>
          </ul>
        </div>
     
    </div>
  );
};

export default Footer;















// import React from "react";
// import { FaLocationArrow } from "react-icons/fa";
// import { RiFacebookLine } from "react-icons/ri";
// import { CiTwitter } from "react-icons/ci";
// import { LiaInstagram, LiaLinkedinIn } from "react-icons/lia";

// const Footer = () => {
//   return (
//     <div className="bg-black w-full px-6 py-10 md:px-20 md:py-20">
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 items-start">
       
//         <div className="flex flex-col">
//           <h1 className="text-white font-bold text-2xl mb-6">Exclusive</h1>
//           <ul className="space-y-2">
//             <li className="text-white text-xl font-semibold mb-4">Subscribe</li>
//             <li className="text-white font-medium mb-4">
//               Get 10% off your first order
//             </li>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 border border-gray-600 w-full pr-10"
//               />
//               <FaLocationArrow className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
//             </div>
//           </ul>
//         </div>

       
//         <div className="flex flex-col">
//           <h1 className="text-white font-bold text-2xl mb-6">Support</h1>
//           <ul className="space-y-2">
//             <li className="text-white text-xl mb-4">
//               111 Bijoy sarani, Dhaka,
//               <br />
//               DH 1515, Bangladesh.
//             </li>
//             <li className="text-white text-xl">exclusive@gmail.com</li>
//             <li className="text-white text-xl">+88015-88888-9999</li>
//           </ul>
//         </div>

        
//         <div className="flex flex-col">
//           <h1 className="text-white font-bold text-2xl mb-6">Account</h1>
//           <ul className="space-y-2">
//             <li className="text-white text-xl">My Account</li>
//             <li className="text-white text-xl">Login / Register</li>
//             <li className="text-white text-xl">Cart</li>
//             <li className="text-white text-xl">Wishlist</li>
//             <li className="text-white text-xl">Shop</li>
//           </ul>
//         </div>

       
//         <div className="flex flex-col">
//           <h1 className="text-white font-bold text-2xl mb-6">Quick Link</h1>
//           <ul className="space-y-2">
//             <li className="text-white text-xl">Privacy Policy</li>
//             <li className="text-white text-xl">Terms Of Use</li>
//             <li className="text-white text-xl">FAQ</li>
//             <li className="text-white text-xl">Contact</li>
//           </ul>
//         </div>

        
//         <div className="flex flex-col">
//           <h1 className="text-white font-bold text-2xl mb-6">Download App</h1>
//           <ul className="space-y-4">
//             <li className="text-gray-500 text-xl">Save $3 with App New User Only</li>
//             <div className="flex items-center gap-4">
//               <img
//                 src="/images/qr-code.png"
//                 alt="QR Code"
//                 className="w-16 h-16"
//               />
//               <img
//                 src="/images/google.png"
//                 alt="Google Play"
//                 className="w-32 h-10"
//               />
//             </div>
//             <div className="flex items-center gap-6 mt-4">
//               <RiFacebookLine className="text-white text-4xl" />
//               <CiTwitter className="text-white text-4xl" />
//               <LiaInstagram className="text-white text-4xl" />
//               <LiaLinkedinIn className="text-white text-4xl" />
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
