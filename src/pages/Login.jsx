import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto bg-white p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="hidden sm:block md:hidden lg:block ">
          <img
            src="/images/phone-img.png"
            alt="Phone"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-6 p-6  ">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Log in to Exclusive
          </h1>
          <p className="text-gray-600 text-center">Enter your details below</p>

          <div className="max-w-lg mx-auto p-6 bg-white rounded-lg">
            <form className="space-y-6 ">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-red-600 rounded-md"
                  placeholder="Enter your email or phone number"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-red-600 rounded-md"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-center space-x-6 -mt-4">
                <button
                  type="submit"
                  className="w-52 bg-red-600 text-white rounded-md px-4 py-3 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                >
                  Log In
                </button>

                <Link to="/login">
                  <p className="cursor-pointer text-red-600 p-12">
                    Forgot Password?
                  </p>
                </Link>
              </div>
             

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
