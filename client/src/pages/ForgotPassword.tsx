import React, { } from 'react';
import { Link } from 'react-router-dom';
import SideBg from "../components/SideBg";

const ForgotPassword = () => {
    return (
        <div className="flex gap-32 items-center h-screen px-32 bg-gray-250">
          <div className="w-2/5">
            <SideBg />
          </div>
          <div className="w-3/5 bg-white shadow-xl p-16 rounded-2xl">
            <button className="px-8 py-2 bg-blue-150 rounded-3xl font-semibold text-white border-4 border-[#E9FEFF]">
              Sign In
            </button>

            <p className='mt-9 h-5 text-gray-750 px-2 font-medium text-sm'>
                Forgot Password
            </p>

            <input type="password" className='h-9 w-96 mt-4 border-2 border-gray-350 text-sm px-4 rounded-md' placeholder="Email id" />

            <div className="flex flex-row w-48 mt-8 h-4 items-center gap-2">
              <Link to="/sign-in" className='text-gray-450 text-xs h-4'>&#60; Back</Link>
            </div>

            <button className="mt-4 bg-gradient-to-r from-blue-450 to-blue-150 text-white py-2 w-96 rounded-lg font-semibold text-sm">
              Dive In !!!
            </button>

          </div>
        </div>
    );
};

export default ForgotPassword;
