import React from "react";
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
      </div>
    </div>
  );
}
