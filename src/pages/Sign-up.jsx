import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mx-auto bg-white p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
       
        <div className="order-1 lg:order-none">
          <img
            src="/images/phone-img.png"
            alt="Phone"
            className="w-full h-auto"
          />
        </div>

       
        <div className="space-y-6 p-10 order-2 lg:order-none ">
          <h1 className="text-3xl font-bold text-gray-800">
            Create an account
          </h1>
          <p className="text-gray-600">Enter your details below</p>

          {/* Form */}
          <form className="space-y-6 w-5/6 py-4">
            <div className="relative">
              <span className="block text-gray-500 mb-2">Name</span>
              <div className="border-b-2 border-gray-500"></div>
            </div>

            <div className="relative">
              <span className="block text-gray-500 mt-8">
                Email or phone number
              </span>
              <div className="border-b-2 border-gray-500"></div>
            </div>

            <div className="relative">
              <span className="block text-gray-500 mt-8">Password</span>
              <div className="border-b-2 border-gray-500"></div>
            </div>

         
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white rounded-md px-4 py-4  mt-2"
              >
                Create Account
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="flex items-center justify-center border-2 w-full text-black rounded-md px-4 py-4  mt-2 space-x-2"
              >
                <FcGoogle className="text-2xl mr-2 " />
                Sign up with Google
              </button>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <p className="cursor-pointer">Already have account?</p>
              <Link to="/login">
              <p className="cursor-pointer">
                Log in <hr className=" w-10 border-black border-t-2" />
              </p>
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;




