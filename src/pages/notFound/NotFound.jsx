import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-slate-600 via-gray-600 to-slate-600 text-white">
      <div className="text-center animate-fadeIn">
        <div className="relative">
          <h1 className="text-[12rem] font-extrabold drop-shadow-lg leading-none">
            404
          </h1>
        </div>

        <h2 className="text-4xl font-bold mt-4 drop-shadow-lg">
          Oops! Page Not Found
        </h2>
        <p className="text-lg mt-2">
          We can't find the page you're looking for. Let's get you back home!
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-white text-blue-600 font-semibold px-3 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Go Back to Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
