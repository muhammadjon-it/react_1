
import React from "react";
import { Link, useNavigate } from "react-router";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">

        <div className="relative mb-6">
          <h1 className="text-[130px] sm:text-[180px] font-black leading-none text-green-100 select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-600 flex items-center justify-center shadow-xl shadow-green-200">
              <FaSearch className="text-white text-4xl sm:text-5xl" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
            Page not found
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Oops! Page not found
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-7 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been
            moved. Please return to the homepage and continue shopping.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-200"
          >
            <FaHome />
            Back to Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 hover:border-green-600 hover:text-green-600 text-gray-600 px-7 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-10">
          Error Code: 404 | GreenShop
        </p>
      </div>
    </div>
  );
};

export default NotFound;
