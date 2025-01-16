import React from "react";

const Account = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="mb-8">
        <p className="text-gray-600 text-sm">Home / My Account</p>
      </div>

      <div className="grid  sm:grid-cols-12 gap-10">
        <div className="sm:col-span-3 flex flex-col  h-full">
          {/* Sidebar */}
          <div className="bg-white rounded-md p-4">
            <ul className="space-y-4">
              <li className="text-black mt-6 font-medium">Manage My Account</li>
              <li className="text-gray-600 font-medium px-4">My Profile</li>
              <li className="text-gray-600 px-4">Address Book</li>
              <li className="text-gray-600 px-4">My Payment Options</li>
              <li className="text-black mt-6 font-medium">My Orders</li>
              <li className="text-gray-600 px-4">My Returns</li>
              <li className="text-gray-600 px-4">My Cancellations</li>
              <li className="text-black mt-6 font-medium">My Wishlist</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white  shadow-md rounded-md sm:col-span-9 p-4">
          <h2 className="text-xl font-semibold text-black mb-6">
            Edit Your Profile
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Md"
                  className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-black"
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Rimel"
                  className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-black"
                />
              </div>

              <div className="">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="remel1111@gmail.com"
                  className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-black"
                />
              </div>

              <div className="">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Kingston,5236,United State"
                  className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-black"
                />
              </div>
            </div>

            {/* Password*/}
            <div className="grid gap-4 mb-6 ">
              
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password Changes
                </label>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="border border-gray-300 p-3 rounded-md  focus:outline-none focus:border-black"
                />
            
              <input
                type="password"
                placeholder="New Password"
                className="border border-gray-300 p-3 rounded-md  focus:outline-none focus:border-black"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="border border-gray-300 p-3 rounded-md  focus:outline-none focus:border-black"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                className="text-gray-600 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition  w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-600 transition  w-full sm:w-auto"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
