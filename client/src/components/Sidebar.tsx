import React, { useState } from "react";
import newMessage from "../images/icons/new-message-white.svg";
import primaryLight from "../images/icons/primary-light.svg";
import primaryDark from "../images/icons/primary-dark.svg";
import sendLight from "../images/icons/send-light.svg";
import sendDark from "../images/icons/send-dark.svg";
import approveLight from "../images/icons/approve-light.svg";
import approveDark from "../images/icons/approve-dark.svg";
import rejectLight from "../images/icons/reject-light.svg";
import rejectDark from "../images/icons/reject-dark.svg";
import pendingLight from "../images/icons/pending-light.svg";
import pendingDark from "../images/icons/pending-dark.svg";
import notificationLight from "../images/icons/notification-light.svg";
import notificationDark from "../images/icons/notification-dark.svg";
import draftLight from "../images/icons/draft-light.svg";
import draftDark from "../images/icons/draft-dark.svg";
import profileLight from "../images/icons/profile-light.svg";
import profileDark from "../images/icons/profile-dark.svg";
import logoutDark from "../images/icons/logout-dark.svg";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  interface SidebarContent1 {
    iconLight: string;
    iconDark: string;
    title: string;
    number: string;
  }

  const sidebarContent1: SidebarContent1[] = [
    {
      iconLight: primaryLight,
      iconDark: primaryDark,
      title: "Primary",
      number: "",
    },
    { iconLight: sendLight, iconDark: sendDark, title: "Send", number: "" },
    {
      iconLight: approveLight,
      iconDark: approveDark,
      title: "Approve",
      number: "3",
    },
    {
      iconLight: rejectLight,
      iconDark: rejectDark,
      title: "Reject",
      number: "",
    },
    {
      iconLight: pendingLight,
      iconDark: pendingDark,
      title: "Pending",
      number: "2",
    },
    {
      iconLight: notificationLight,
      iconDark: notificationDark,
      title: "Notification",
      number: "",
    },
    {
      iconLight: draftLight,
      iconDark: draftDark,
      title: "Draft",
      number: "",
    },
    {
      iconLight: profileLight,
      iconDark: profileDark,
      title: "Profile",
      number: "",
    },
  ];

  return (
    <div className="px-10 py-12 bg-white h-screen flex flex-col justify-between">
      <div>
        <div className="flex gap-4 items-center py-3 px-5 bg-gradient-to-r from-blue-350 to-blue-150 rounded-lg">
          <img src={newMessage} alt="" className="w-5 h-5" />
          <p className="text-sm font-semibold text-white">New Message</p>
        </div>
        <div className="mt-6">
          {sidebarContent1.map((item, index) => (
            <div>
              <div
                className={`flex justify-between items-center py-3 px-5 rounded-lg cursor-pointer ${
                  selected === index ? "bg-blue-50" : "bg-white"
                }`}
                onClick={() => setSelected(index)}
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={selected === index ? item.iconLight : item.iconDark}
                    alt=""
                    className="w-5 h-5"
                  />
                  <p
                    className={`text-sm font-semibold ${
                      selected === index ? "text-blue-250" : "text-gray-750"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
                <p
                  className={`font-semibold text-xxs ${
                    selected === index
                      ? "text-white bg-blue-250"
                      : "text-gray-750 bg-gray-350"
                  } ${item.number ? "py-0.5 px-1.5 rounded" : ""}`}
                >
                  {item.number}
                </p>
              </div>
              {index == 4 || index > 7 ? (
                <hr className="text-gray-450 my-5" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr className="text-gray-450 my-5" />
        <div className="flex gap-4 items-center py-3 px-5">
          <img src={logoutDark} alt="" className="w-5 h-5" />
          <p className="text-sm font-semibold text-gray-750">Logout</p>
        </div>
      </div>
    </div>
  );
}
