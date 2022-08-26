import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useYourRejectedDocuments } from "../../queries/hooks";
import { useEmployeeInfo, useAdminInfo } from "../../queries/hooks";

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

enum Status {
  Pending = "Pending",
  Forwarded = "Forwarded",
  Rejected = "Rejected",
  Approved = "Approved",
}

interface Props {
  selected: number;
  setSelected: (selected: number) => void;
  color: string;
}

const Rejected = ({ selected, setSelected, color }: Props) => {
  useEffect(() => {
    setSelected(3);
  }, [setSelected]);

  const [selectedMid, setSelectedMid] = useState<number>(0);
  const [messages, setMessages] = useState<any[]>([]);
  const [additionalMessage, setAdditionalMessage] = useState<string>("");

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

  const receivedMessages = useYourRejectedDocuments({
    employeeId: localStorage.getItem("empId"),
  });

  useEffect(() => {
    if (receivedMessages.data) {
      setMessages(receivedMessages.data.data);
    }
    console.log(receivedMessages.data);
  }, [receivedMessages.isSuccess === true]);

  return (
    <div className="h-screen flex bg-white overflow-hidden">
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
              type="approved"
              emailContent={messages[selectedMid]}
              documentId={messages[selectedMid].documentId}
            />
          </div>
        </div>
      ) : (
        <div className="w-4/5">
          {receivedMessages.isSuccess === true ? (
            <div className="flex justify-center items-center h-screen bg-gray-50">
              <p>Hurray! You have no rejected documents.</p>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      )}
    </div>
  );
};

export default Rejected;
