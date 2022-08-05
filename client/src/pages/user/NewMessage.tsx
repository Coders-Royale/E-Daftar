import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Middlebar from "../../components/Middlebar";
import TimelineComponent from "../../components/TimelineComponent";
import RegistrationButton from "../../components/buttons/RegistrationButton";

import EditPen from "../../images/icons/newmessage_page_newpen.svg";
import Email1 from "../../images/tracking_page_email_1.png";
import Email2 from "../../images/tracking_page_email_2.png";
import Email3 from "../../images/tracking_page_email_3.png";
import Attach from "../../images/icons/newmessage_page_attach.svg";
import Photos from "../../images/icons/newmessage_page_photos.svg";
import Link from "../../images/icons/newmessage_page_link.svg";
import Send from "../../images/icons/newmessage_page_send.svg";

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

Respected Sir/Ma'am,

I am writing this to inform you that I will be taking leave on ____ (date) as I have to _____ (mention reasons like attending a wedding, visit a friend, attending a seminar or event, etc.). I have completed all my tasks for the day and would be in touch with my team members if my assistance is required anytime.

Thank you.

Yours Sincerely,
John Doe
`;

interface Props {
  selected: number;
  setSelected: (selected: number) => void;
}

const NewMessage = ({ selected, setSelected }: Props) => {
  useEffect(() => {
    setSelected(1);
  }, [setSelected]);

  const navigate = useNavigate();
  const [additionalMessage, setAdditionalMessage] = useState<string>("");

  return (
    <div className="h-screen flex bg-white overflow-hidden">
      <div className="w-1/4">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>
      <div className="flex flex-row w-full overflow-scroll">
        <div className="w-1/3">
          <Middlebar />
        </div>
        <div className="w-full px-10 overflow-scroll">
          <h1 className="mt-12 text-base font-semibold tracking-normal text-gray-750">
            New Message
          </h1>
          <div className="flex flex-row items-center gap-2">
            <img src={EditPen} alt="edit" className="w-4 h-4" />
            <p className="font-normal italic font-sm text-gray-550">You can use template and update whereever necessary.</p>
          </div>

          <div className="mt-6 h-11 w-full border border-gray-450 rounded-lg flex flex-row">
            <h1 className="border-r border-gray-450 px-4 font-medium text-sm text-gray-750 pt-3">Department</h1>
            <h1 className="font-medium text-sm text-gray-750 pt-3 px-4">Human Resource Department</h1>
          </div>

          <div className="mt-2 h-11 w-full border border-gray-450 rounded-lg flex flex-row">
            <h1 className="font-medium text-sm text-gray-750 pt-3 px-4">Leave Application</h1>
          </div>

          <div className="mt-2 h-11 w-full border border-gray-450 rounded-lg flex flex-row">
            <h1 className="font-medium text-sm text-gray-550 pt-3 px-4">Leave Application Template</h1>
          </div>

          <div className="mt-6">
            <div className="whitespace-pre-line font-normal text-base text-gray-750">
              {emailContent}
            </div>
            <div className="pt-4 flex flex-row gap-8">
              <img src={Email1} alt="" className="w-1/3" />
              <img src={Email2} alt="" className="w-1/3" />
              <img src={Email3} alt="" className="w-1/3" />
            </div>
          </div>

          <div className="mt-40 mb-20 flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-350 border border-gray-450">
                <img src={Attach} alt="" className="w-5 h-5 mx-auto my-2" />
              </button>

              <div className="w-10 h-10 rounded-full bg-gray-350 border border-gray-450">
                <img src={Photos} alt="" className="w-5 h-5 mx-auto my-2" />
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-350 border border-gray-450">
                <img src={Link} alt="" className="w-5 h-5 mx-auto my-2" />
              </div>
            </div>

            <div className="w-24">
              <button className="bg-gradient-to-r from-blue-450 to-blue-150 text-gray-150 py-3 w-full rounded-lg font-medium flex flex-row gap-2 px-4">
                <img src={Send} alt="send" className="h-5 w-5" /> Send
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
