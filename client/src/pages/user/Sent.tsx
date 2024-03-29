import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLoadMessages } from "../../queries/hooks";
import {
  useEmployeeInfo,
  useAdminInfo,
  useTrackStatus,
} from "../../queries/hooks";

import Sidebar from "../../components/Sidebar";
import Middlebar from "../../components/Middlebar";
import EmailContent from "../../components/EmailContent";
import TimelineComponent from "../../components/TimelineComponent";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SendIcon from "@mui/icons-material/Send";
import Man from "../../images/man.svg";
import GreenTick from "../../images/icons/tracking_page_green_tick.svg";
import Clock from "../../images/icons/tracking_page_clock.svg";
import Email1 from "../../images/tracking_page_email_1.png";
import Email2 from "../../images/tracking_page_email_2.png";
import Email3 from "../../images/tracking_page_email_3.png";
import Dp from "../../images/profile_page_dp.png";
import Loader from "../../components/Loader";
import { AppContext } from "../../App";

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
  color: string;
}

const Sent = ({ selected, setSelected, color }: Props) => {
  // useEffect(() => {
  //   setSelected(1);
  // }, [setSelected]);

  const { setNotification } = useContext(AppContext);

  const [selectedMid, setSelectedMid] = useState<number>(0);
  const [messages, setMessages] = useState<any[]>([]);
  const [additionalMessage, setAdditionalMessage] = useState<string>("");
  const [statuses, setStatuses] = useState<any[]>([]);

  const navigate = useNavigate();

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

  const receivedStatus: any = useTrackStatus({
    documentId:
      messages?.length > 0
        ? messages[selectedMid]?.content.split("documentId=")[1]
        : "",
    employeeId: localStorage.getItem("empId"),
  });

  useEffect(() => {
    if (receivedStatus.data) {
      setStatuses(receivedStatus.data?.data);
      const temp = (receivedStatus?.data?.data as []) || [];

      setNotification((prev: any) => {
        return [...prev, ...temp];
      });
    }
  }, [receivedStatus.isSuccess === true]);

  const receivedMessages = useLoadMessages({
    employeeId: localStorage.getItem("empId"),
    pageNo: 1,
    filter: "sent",
  });

  useEffect(() => {
    if (receivedMessages.data) {
      setMessages(receivedMessages.data.data);
    }
  }, [receivedMessages.isSuccess === true]);

  return (
    <div className="h-screen w-full flex bg-white overflow-hidden">
      <div className="w-1/5">
        <Sidebar selected={selected} setSelected={setSelected} color={color} />
      </div>
      {messages?.length > 0 ? (
        <div className="flex w-4/5">
          <div className="w-1/3 overflow-scroll">
            <Middlebar
              selectedMid={selectedMid}
              setSelectedMid={setSelectedMid}
              displayRooms={messages}
            />
          </div>
          <div className="w-2/3 overflow-scroll">
            <EmailContent
              selectedMid={selectedMid}
              setSelectedMid={setSelectedMid}
              type="sent"
              emailContent={messages[selectedMid]}
              statuses={statuses}
            />
          </div>
        </div>
      ) : (
        <div className="w-4/5">
          {receivedMessages.isSuccess === true &&
          receivedMessages?.data?.error === true ? (
            <div className="flex justify-center items-center h-screen bg-gray-50">
              <p>
                You haven't sent any message yet. Try creating a new message.
              </p>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      )}
    </div>
  );
};

export default Sent;
