import { ArrowRightCircleIcon, ArrowRightIcon, FolderArrowDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen mt-16 flex items-center justify-center bg-gray-100 pr-4 pl-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 ">
        <div>
          <h2 className="text-center text-4xl mb-4 font-bold">Sign-up</h2>
          <form
            action=""
            className="flex flex-col"
          >
            <label htmlFor="" className="mb-2 font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your full name"
              className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <label htmlFor="" className="mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <label htmlFor="" className="mb-2 font-semibold text-gray-700">
              Password
            </label>
            <input
              type="Password"
              id="Password"
              placeholder="Enter your Password"
              className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <label htmlFor="" className="mb-2 font-semibold text-gray-700">
              Re-enter Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Conform your Password"
              className="mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="flex flex-col lg:flex lg:flex-row justify-center items-center gap-3">
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors border-2 border-black">
              Signup
            </button>
            <Link to='/login' className="text-bold flex justify-center items-center gap-1 w-full bg-white text-black text-center py-3 px-1 rounded-lg hover:bg-gray-200 transition-colors border-2 border-black">
              Already have an account signin <ArrowRightIcon className="h-6 w-6" />
            </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
