import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Sidebar from "../../components/Sidebar";
import Middlebar from '../../components/Middlebar';
import TimelineComponent from '../../components/TimelineComponent';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SendIcon from '@mui/icons-material/Send';
import Man from '../../images/man.svg';
import GreenTick from '../../images/icons/tracking_page_green_tick.svg';
import Clock from '../../images/icons/tracking_page_clock.svg';
import Email1 from '../../images/tracking_page_email_1.png';
import Email2 from '../../images/tracking_page_email_2.png';
import Email3 from '../../images/tracking_page_email_3.png';
import Dp from '../../images/profile_page_dp.png';

enum Status {
  Pending = "Pending",
  Forwarded = "Forwarded",
  Rejected = "Rejected",
  Approved = "Approved",
}

const emailContent = `
To
The Manager
Hero Moto Corp.

Subject: One day leave application

Respected Sir/Ma’am,

I am writing this to inform you that I will be taking leave on ____ (date) as I have to _____ (mention reasons like attending a wedding, visit a friend, attending a seminar or event, etc.). I have completed all my tasks for the day and would be in touch with my team members if my assistance is required anytime.

Thank you.

Yours Sincerely,
John Doe
`

const Sent = () => {
  const navigate = useNavigate();
  const [additionalMessage, setAdditionalMessage] = useState<string>("");

  interface Error {
    type: string;
    message: string;
  }
  const [errors, setErrors] = useState<Error[]>([]);

  var errLength = 0;

  const validate = () => {
    errLength = 0;
    setErrors([]);

    if (additionalMessage === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "additionalMessage", message: "Please enter something!" },
      ]);
      errLength++;
    }

    if (errLength === 0) return true;

    return false;
  };
 
  return (
    <div className="h-screen flex bg-white overflow-hidden">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="flex flex-row w-full overflow-scroll">
        <div className='w-1/3'>
          <Middlebar />
        </div>

        <div className='w-2/3 overflow-scroll px-10'>

          {/*NAVIGATOR*/}
          <div className='mt-16 flex flex-row justify-end'>
            <div className="flex flex-row gap-4 items-center">
              <h1 className='text-sm font-normal text-gray-750'>1 of 50</h1>
              <div className='px-4 py-3 rounded-lg border border-gray-450 flex flex-row'>
                <button className='pr-4'><ChevronLeftIcon /></button>
                <button className='pl-4 border-l-1 border-gray-450'><ChevronRightIcon /></button>
              </div>

            </div>
          </div>

          {/*HEADING*/}
          <div className='mt-6 flex flex-row justify-between'>
            <div className="flex flex-row gap-4">
              <img src={Man} alt='man' className='rounded-full w-[60px] h-[60px]' />
              <div className=''>
                <h1 className='text-sm font-semibold text-gray-750'>To: Himanshu Chittora <span><KeyboardArrowDownIcon fontSize="small"/></span></h1>
                <h1 className='text-3xl font-normal text-gray-750'>Leave Application</h1>
              </div>
            </div>

            <h1 className='font-semibold text-sm text-gray-550'>3 hours ago</h1>
          </div>

          {/*CURRENT STATUS*/}
          <div className='pl-[76px] mt-8'>
            <h1 className='text-sm font-bold text-gray-750 tracking-widest'>CURRENT STATUS</h1>
            <div className='flex flex-row mt-4 items-center gap-2'>
              <img src={GreenTick} alt='green-tick' className='w-4 h-4' />
              <h1 className='text-sm font-medium text-gray-650'><span className='text-green-550 text-base'>Approved</span> by Mr. Venkatesh Iyer</h1>
            </div>

            <div className='flex flex-row mt-1 items-center gap-2'>
              <img src={Clock} alt='clock' className='w-4 h-4' />
              <h1 className='text-xs font-medium text-gray-550'>1:30 PM, 11 July, 2022 (Monday)</h1>
            </div>
          </div>

          {/*TRACKING*/}
          <div className='pl-[76px] mt-8'>
            <h1 className='text-sm font-bold text-gray-750 tracking-widest'>TRACKING</h1>
            <div className='mt-4'>
              <TimelineComponent index={1} name="Mr. Parmish Verma" time="12:30 PM" date="11 July, 2022 (Monday)" status={Status.Forwarded} remarks="Bla Bla Bla" />
              <TimelineComponent index={2} name="Mr. Raghuram Rajan" time="1:30 PM" date="11 July, 2022 (Monday)" status={Status.Rejected} remarks="Bla Bla Bla" />
              <TimelineComponent index={2} name="Mr. Raghuram Rajan" time="1:30 PM" date="11 July, 2022 (Monday)" status={Status.Pending} remarks="Bla Bla Bla" />
              <TimelineComponent index={3} name="Mr. Venkatesh Iyer" time="2:30 PM" date="11 July, 2022 (Monday)" status={Status.Approved} />
            </div>
          </div>

          {/*EMAIL CONTENT*/}
          <div className="pl-[76px] mt-16">
            <h1 className='text-sm font-bold text-gray-750 tracking-widest'>EMAIL CONTENT</h1>
            <div className='pt-4 items-center whitespace-pre-line font-normal text-sm text-gray-750'>
              {emailContent}
            </div>
            <div className='pt-4 flex flex-row gap-8'>
              <img
                src={Email1}
                alt=""
                className="w-1/3"
              />
              <img
                src={Email2}
                alt=""
                className="w-1/3"
              />
              <img
                src={Email3}
                alt=""
                className="w-1/3"
              />
            </div>
          </div>

          {/*ADDITIONAL MESSAGE*/}
          <div className="pl-[76px] my-16 grid grid-cols-6 gap-4">
            <div className='col-span-5'>
              <div className="bg-gray-150 border border-gray-450 rounded-lg h-11 flex flex-row w-full">
                <div className='pl-4 py-3'>
                  <img src={Dp} alt="profile_dp" className="w-5 h-5 rounded-full" />
                </div>
                <input className='bg-gray-150 my-auto mx-2 px-2 text-sm w-full' placeholder='Additional Message' onChange={(e) => setAdditionalMessage(e.target.value)}></input>
              </div>
              <div className="mt-1 mb-1 text-left">
                {errors.length > 0
                  ? errors.map((item, index) => {
                      if (item.type === "additionalMessage") {
                        return (
                          <p className="text-red-500 text-xs" key={index}>
                            {item.message}
                          </p>
                        );
                      }
                    })
                  : null}
              </div>
            </div>
            <div className='col-span-1'>
              <button className="bg-gradient-to-r from-blue-450 to-blue-150 text-white py-2 h-11 w-full rounded-lg font-semibold"
                onClick={(e) => {
                    validate() && navigate('/');
                }}>
                <SendIcon fontSize="small" className='mb-1' /> Send
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sent;
