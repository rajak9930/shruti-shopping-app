import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
        <h1 className="text-8xl text-black font-bold mb-4">404 Not Found</h1>
        <p className="text-2xl text-black mb-8">Your visited page not found.you may go home back.</p>
           
           <Link to = '/'
           className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-600 transition"
           >
              Back To Home Page
           </Link>
    </div>

  );
};

export default Notfound;
