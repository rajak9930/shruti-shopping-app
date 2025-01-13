import React from "react";
import { SiHomeassistantcommunitystore, SiCashapp } from "react-icons/si";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";
import { LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { FaTruckFast, FaMoneyCheckDollar } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto bg-white">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 gap-10 space-y-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600 font-semibold">
              An About Us page is a section on a website that provides
              information about a company, organization, or individual. It’s an
              opportunity to tell your brand’s story, share your vision or
              mission, introduce team members, and outline your history and
              achievements. This is where you build trust and credibility with
              customers. In Shopify’s customer trust research, we found shoppers
              navigate to an About Us page to learn more about the brand and the
              people behind the products. According to one study, 59% of
              consumers surveyed said they would more likely purchase from a
              brand they trust. That number jumps to 79% of younger Gen Z
              consumers. Your About Page should address those two curiosities
              shoppers have to help them with decision making.
            </p>
          </div>

          <div>
            <img
              src="/images/about.webp"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-10  items-center justify-evenly py-16">
          <div className="border border-gray-300 p-6 rounded-lg text-center w-[250px] min-h-[200px]">
            <div className="flex justify-center  p-6 text-4xl ">
              {" "}
              <SiHomeassistantcommunitystore />
            </div>
            <h1 className="font-bold text-2xl">10.5k</h1>
            <p className="text-gray-700 font-serif">Sailers active our site</p>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg text-center bg-red-600 w-[250px] ">
            <div className="flex justify-center  p-6 text-4xl text-white ">
              {" "}
              <SiCashapp />
            </div>
            <h1 className="text-2xl font-bold text-white">33k</h1>
            <p className="text-white font-serif">Monthly Products Sale</p>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg text-center w-[250px]">
            <div className="flex justify-center  p-6 text-4xl ">
              {" "}
              <BiSolidShoppingBagAlt />
            </div>
            <h1 className="text-2xl font-bold">45.5k</h1>
            <p className="text-gray-700 font-serif">
              Customer active in our site
            </p>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg text-center w-[250px] ">
            <div className="flex justify-center  p-6 text-4xl ">
              {" "}
              <SiCashapp />
            </div>
            <h1 className="text-2xl font-bold">25k</h1>
            <p className="text-gray-700 font-serif">
              Anal gross sale in our site
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 justify-evenly items-center px-10">
          <div className=" border-gray-400 p-6 rounded-lg text-center">
            <img
              src="/images/image-1.png"
              alt="about-us"
              className="mx-auto mb-4"
            />

            <h1 className="text-4xl font-bold  text-black mb-2 text-start">
              Tom Cruise
            </h1>

            <p className="text-gray-900 text-1xl  text-start">
              Founder & Chairman
            </p>

            <div className="flex justify-start gap-4 mt-2">
              <span className="text-2xl">
                <CiTwitter />
              </span>
              <span className="text-2xl">
                <LiaInstagram />
              </span>
              <span className=" text-2xl">
                <LiaLinkedinIn />
              </span>
            </div>
          </div>

          <div className=" border-gray-400 p-6 rounded-lg text-center ">
            <img
              src="/images/image-2.png"
              alt="about-us"
              className="mx-auto mb-2"
            />
            <h1 className="text-4xl font-bold text-black text-start mb-2">
              Emma Waston
            </h1>

            <p className="text-gray-900 text-1xl text-start">
              Managing Director
            </p>

            <div className="flex justify-start gap-4 p-2">
              <span className="text-2xl">
                <CiTwitter />
              </span>
              <span className="text-2xl">
                <LiaInstagram />
              </span>
              <span className="text-2xl">
                <LiaLinkedinIn />
              </span>
            </div>
          </div>

          <div className=" border-gray-400 p-6 rounded-lg text-center ">
            <img
              src="/images/image-3.png"
              alt="about-us"
              className="mx-auto mb-2"
            />

            <h1 className="text-4xl font-bold text-black text-start mb-2">
              Will Smith
            </h1>

            <p className="text-gray-900 text-1xl text-start">
              Product Designer
            </p>

            <div className="flex justify-start gap-4 mt-2">
              <span className="text-2xl">
                <CiTwitter />
              </span>
              <span className="text-2xl">
                <LiaInstagram />
              </span>
              <span className="text-2xl">
                <LiaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
        <div className=" grid sm:grid-cols-3 justify-evenly py-16 gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="flex justify-center items-center h-16 w-full">
              <FaTruckFast className="text-4xl text-black" />
            </div>

            <h1 className="text-lg sm:text-xl lg:text-2xl text-black font-bold">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-2 ">
            <div className="flex justify-center items-center h-16 w-full">
              <FaHeadphones className="text-4xl text-black" />
            </div>
            <h1 className="text-lg sm:text-2xl lg:text-2xl text-black font-bold">
              24/7 CUSTOMER SERVICE
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Friendly 24/7 customer support
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-2 ">
            <div className="flex justify-center items-center h-16 w-full">
              <FaMoneyCheckDollar className="text-4xl text-black" />
            </div>
            <h1 className="text-lg sm:text-2xl lg:text-2xl text-black font-bold">
              MONEY BACK GUARANTEE
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
