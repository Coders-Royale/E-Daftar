import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { useMutateCreateDocument } from "../../queries/mutations";
import { useRooms } from "../../queries/hooks";

import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

import Sidebar from "../../components/Sidebar";
import Middlebar from "../../components/Middlebar";
import PDFIcon from "../../components/PDFIcon";

import EditPen from "../../images/icons/newmessage_page_newpen.svg";
import Email1 from "../../images/tracking_page_email_1.png";
import Email2 from "../../images/tracking_page_email_2.png";
import Email3 from "../../images/tracking_page_email_3.png";
import Attach from "../../images/icons/newmessage_page_attach.svg";
import Photos from "../../images/icons/newmessage_page_photos.svg";
import Link from "../../images/icons/newmessage_page_link.svg";
import Send from "../../images/icons/newmessage_page_send.svg";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Props {
  selected: number;
  setSelected: (selected: number) => void;
}

interface Error {
  type: string;
  message: string;
}

const baseUrl = "https://sih-2022-server.azurewebsites.net/api";

const Primary = ({ selected, setSelected }: Props) => {
  useEffect(() => {
    setSelected(-1);
  }, [setSelected]);

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Error[]>([]);
  const [name, setName] = useState<string>("");
  const [rooms, setRooms] = useState<any[]>([]);
  var [emailContent, setEmailContent] = useState("");

  const receivedRooms = useRooms({
    employeeId: localStorage.getItem("empId"),
  });

  useEffect(() => {
    if (receivedRooms.data !== undefined) {
      setRooms(receivedRooms.data);
    }
  }, [receivedRooms.isFetched === true]);

  return (
    <div className="h-screen flex bg-white overflow-hidden">
      <div className="w-1/4">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>
      <div className="flex flex-row w-full overflow-scroll">
        <div className="w-1/3">
          <Middlebar />
        </div>
        <div className="w-2/3 px-10 overflow-scroll">
          
        </div>
      </div>
    </div>
  );
};

export default Primary;
