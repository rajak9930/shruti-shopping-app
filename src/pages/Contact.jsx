import React from "react";
import { CiPhone, CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="container mx-auto bg-white py-16 px-4">
      <div className="mb-8">
        <p className="text-gray-600 text-sm">Home / Contact</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 gap-6 ">
        {/* Left Side */}
        <div className="bg-white shadow rounded-md p-6 w-[400px] h-[420px] md:mb-0 mb-6 ">
          <div className="flex items-start space-x-4 mb-6">
            <CiPhone className="bg-red-600 text-white text-4xl p-2 rounded-lg" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Call To Us</h2>
              <p className="text-gray-600 mb-4">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-800 font-medium">Phone: +880611112222</p>
            </div>
          </div>
          <hr className="border-gray-300 mb-6" />
          <div className="flex items-start space-x-4">
            <CiMail className="bg-red-600 text-white text-4xl p-2 rounded-lg" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Write To Us</h2>
              <p className="text-gray-600 mb-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-800 font-medium mb-4">
                Emails: customer@exclusive.com
              </p>
              <p className="text-gray-800 font-medium">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white shadow rounded-md p-6 ">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 ">
              <input
                type="text"
                placeholder="Your Name *"
                className="border border-gray-300 p-3 rounded-md w-full bg-gray-100"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border border-gray-300 p-3 rounded-md w-full bg-gray-100"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="border border-gray-300 p-3 rounded-md w-full bg-gray-100"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-md w-full  h-40 mb-6 bg-gray-100"
            ></textarea>
            <div className="text-right">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
