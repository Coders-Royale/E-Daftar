import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBg from "../components/SideBg";

const NewPassword = () => {
	const [uppercase, setUppercase] = useState(true);
	const [number, setNumber] = useState(true);
	const [special, setSpecial] = useState(false);
	const [lowercase, setLowercase] = useState(false);
	const [match, setMatch] = useState(true);

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

            <input type="password" className='h-9 w-96 mt-4 border-2 border-gray-350 text-sm px-4 rounded-md' placeholder="Old Password" />
            <input type="password" className='h-9 w-96 mt-4 border-2 border-gray-350 text-sm px-4 rounded-md' placeholder="New Password" />
            <input type="password" className='h-9 w-96 mt-4 border-2 border-gray-350 text-sm px-4 rounded-md' placeholder="Confirm Password" />

            {uppercase ? 
            	<p className='pt-4 text-xs italic font-normal text-blue-150'><span className='text-sm'>&#9679;</span> Contain at least one uppercase</p> :
            	<p className='pt-4 text-xs italic font-normal text-gray-450'><span className='text-sm'>&#9679;</span> Contain at least one uppercase</p>
            }

            {number ? 
            	<p className='pt-1 text-xs italic font-normal text-blue-150'><span className='text-sm'>&#9679;</span> Contain at least one number</p> :
            	<p className='pt-1 text-xs italic font-normal text-gray-450'><span className='text-sm'>&#9679;</span> Contain at least one number</p>
            }

            {special ? 
            	<p className='pt-1 text-xs italic font-normal text-blue-150'><span className='text-sm'>&#9679;</span> Contain at least one special character</p> :
            	<p className='pt-1 text-xs italic font-normal text-gray-450'><span className='text-sm'>&#9679;</span> Contain at least one special character</p>
            }

            {lowercase ? 
            	<p className='pt-1 text-xs italic font-normal text-blue-150'><span className='text-sm'>&#9679;</span> Contain at least one lowercase</p> :
            	<p className='pt-1 text-xs italic font-normal text-gray-450'><span className='text-sm'>&#9679;</span> Contain at least one lowercase</p>
            }

            {!match ? 
            	<p className='pt-1 text-xs italic font-normal text-blue-150'><span className='text-sm'>&#9679;</span> Confirm Password don’t match</p> :
            	<p className='pt-1 text-xs italic font-normal text-gray-450'><span className='text-sm'>&#9679;</span> Confirm Password don’t match</p>
            }

            <div className="flex flex-row w-48 mt-8 h-4 items-center gap-2">
              <Link to="/forgot-password" className='text-gray-450 text-xs h-4'>&#60; Back</Link>
            </div>

            <button className="mt-4 bg-gradient-to-r from-blue-450 to-blue-150 text-white py-2 w-96 rounded-lg font-semibold text-sm">
              Dive In !!!
            </button>

          </div>
        </div>
    );
};

export default NewPassword;
