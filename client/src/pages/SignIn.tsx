import React from "react";
import { Link } from 'react-router-dom';
import SideBg from "../components/SideBg";

export default function SignIn() {
  return (
    <div className="flex gap-32 items-center h-screen px-32 bg-gray-250">
      <div className="w-2/5">
        <SideBg />
      </div>
      <div className="w-3/5 bg-white shadow-xl p-16 rounded-2xl">
        <button className="px-8 py-2 bg-blue-150 rounded-3xl font-semibold text-white border-4 border-[#E9FEFF]">
          Sign In
        </button>

        <div className="grid grid-cols-2 pt-9 gap-8 w-96">
          <input type="text" className="col-span-1 h-9 w-44 border-2 border-gray-350 text-sm px-4 rounded-md" placeholder="Employee ID" />
          <input type="text" className="col-span-1 h-9 w-44 border-2 border-gray-350 text-sm px-4 rounded-md" placeholder="Role" />
        </div>

        <input type="password" className='h-9 w-96 mt-4 border-2 border-gray-350 text-sm px-4 rounded-md' placeholder="Password" />

        <div className="w-96 flex flex-row justify-between">

          <div className="flex flex-row w-48 mt-8 h-4 px-2 items-center gap-2">
            <input type="checkbox" className='' />
            <p className='text-gray-450 text-sm'>Remember Me</p>
          </div>

          <Link to="/forgot-password" className='text-gray-450 text-xs mt-8 h-4'>Forgot Password?</Link>
        </div>

        <button className="mt-4 bg-gradient-to-r from-blue-450 to-blue-150 text-white py-2 w-96 rounded-lg font-semibold text-sm">
          Dive In !!!
        </button>

      </div>
    </div>
  );
}