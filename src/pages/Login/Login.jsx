import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircleIcon, ArrowRightIcon, FolderArrowDownIcon } from "@heroicons/react/24/outline";


const Login = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-100">
      <div className=" w-full max-w-md bg-white shadow-lg rounded-lg p-8 ">
        <div>
          <h2 className="text-center text-4xl mb-4 font-bold">Login</h2>
          <form
            action=""
            className="flex flex-col border bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <label htmlFor="" className="mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <label htmlFor="" className="mb-2 font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="mb-6 text-gray-600 hover:text-blue-500">
              <Link to="/">Forgot password?</Link>
            </p>
            <div className="flex flex-col gap-4">
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Login
            </button>
            <Link to={'/signup'} className="text-bold flex justify-center items-center gap-1 w-full bg-white text-black text-center py-3 px-1 rounded-lg hover:bg-gray-200 transition-colors border-2 border-black">
              Don't have an account signup{" "}
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react';

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
//         <form className="flex flex-col">
//           <label htmlFor="email" className="mb-2 font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//             placeholder="Enter your email"
//           />
//           <label htmlFor="password" className="mb-2 font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//             placeholder="Enter your password"
//           />
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-950 transition-colors"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
