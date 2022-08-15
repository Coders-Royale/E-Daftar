import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

import { useLoadMessages } from "../../queries/hooks";
import { useEmployeeInfo, useAdminInfo } from "../../queries/hooks";

import Sidebar from "../../components/Sidebar";
import Middlebar from "../../components/Middlebar";
import PDFIcon from "../../components/PDFIcon";

import Send from "../../images/icons/newmessage_page_send.svg";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface ServerToClientEvents {
  noArg: () => void;
  'private-message': (privateMessageData: { senderId: string, content: string, createdAt: string, senderuserName: string, subject: string }) => void;
}

interface ClientToServerEvents {
  register: (userIdName: string) => void;
}

interface Props {
  selected: number;
  setSelected: (selected: number) => void;
  socketConnection: Socket<ServerToClientEvents, ClientToServerEvents>;
}

interface Error {
  type: string;
  message: string;
}

const Primary = ({ selected, setSelected, socketConnection }: Props) => {
  useEffect(() => {
    setSelected(-1);
  }, [setSelected]);

  const [selectedMid, setSelectedMid] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Error[]>([]);
  const [name, setName] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  var [emailContent, setEmailContent] = useState("");

  const receivedMessages = useLoadMessages({
    employeeId: localStorage.getItem("empId"),
    pageNo: 1,
    filter: "primary",
  });

  useEffect(() => {
    if (receivedMessages.data !== undefined) {
      setMessages(receivedMessages.data.data);
      console.log(receivedMessages.data.data);
    }
  }, [receivedMessages.isFetched === true]);

  const employeeInfo = useEmployeeInfo({
    departmentId: localStorage.getItem("depId"),
    employeeId: localStorage.getItem("empId"),
  });

  const adminInfo = useAdminInfo({
    departmentId: localStorage.getItem("depId"),
    employeeId: localStorage.getItem("empId"),
  });

  useEffect(() => {
    if(adminInfo.data !== undefined) {
      socketConnection.emit(
        "register",
        JSON.stringify({
          userId: localStorage.getItem("adminId"),
        })
      );
      console.log("registered!");
    }
  }, [adminInfo.isFetched === true]);

  useEffect(() => {
    if (employeeInfo.data !== undefined && employeeInfo.data.message !== "Employee does not exist") {
      socketConnection.emit(
        "register",
        JSON.stringify({
          userId: localStorage.getItem("empId"),
          userName: employeeInfo.data.employee.name,
        })
      );
      console.log("registered!");
    }
  }, [employeeInfo.isFetched === true]);

  useEffect(() => {
    socketConnection.on("private-message", (data) => {
      console.log(data);
      const { senderId, content, createdAt, senderuserName, subject } = data;
      setMessages((messages) => [
        ...messages,
        { senderId, content, createdAt, senderuserName, subject },
      ]);
    });
  }, []);

  return (
    <div className="h-screen flex bg-white overflow-hidden">
      <div className="w-1/4">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>
      <div className="flex flex-row w-full overflow-scroll">
        <div className="w-1/3">
          <Middlebar selectedMid={selectedMid} setSelectedMid={setSelectedMid} displayRooms={messages}/>
        </div>
        <div className="w-2/3 px-10 overflow-scroll">
          <h1 className="mt-12 text-base font-semibold tracking-normal text-gray-750">
            New Message
          </h1>

          {/*Render the messsages here.*/}

          <div className="mt-20 mb-20 flex flex-row justify-between">

            <div className="w-24">
              <button
                className="bg-gradient-to-r from-blue-450 to-blue-150 text-gray-150 py-3 w-full rounded-lg font-medium flex flex-row gap-2 px-4"
                onClick={(e: React.MouseEvent<HTMLButtonElement> | any) => {
                  e.preventDefault();
                }}
              >
                <img src={Send} alt="send" className="h-5 w-5" /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;
