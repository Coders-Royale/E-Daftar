import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar";

import SearchIcon from "@mui/icons-material/Search";
import Man from "../../images/man.svg";
import { AppContext, COLORS } from "../../App";

interface NotificationContent {
  sender: string;
  title: string;
  comment: string;
  time: string;
}

const notificationContent1: NotificationContent[] = [
  {
    sender: "John Doe",
    title: "Leave Application",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit iaculis gravida amet, ma ... ",
    time: "Just Now",
  },
  {
    sender: "John Doe",
    title: "Leave Application",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit iaculis gravida amet, ma ... ",
    time: "30 minutes ago",
  },
  {
    sender: "John Doe",
    title: "Leave Application",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit iaculis gravida amet, ma ... ",
    time: "1 hour ago",
  },
];

interface Props {
  selected: number;
  setSelected: (selected: number) => void;
  color: string;
}

const Notifications = ({ selected, setSelected, color }: Props) => {
  const { theme, setTheme, notification } = useContext(AppContext);

  return (
    <div
      className={`h-screen flex ${
        theme === "Dark" ? "bg-gray-850" : "bg-gray-350"
      } overflow-hidden`}
    >
      <div className="w-1/4">
        <Sidebar selected={selected} setSelected={setSelected} color={color} />
      </div>
      <div className="w-full px-10 overflow-scroll">
        <h1
          className={`mt-12 mb-8 text-lg font-medium tracking-widest ${
            theme === "Dark" ? "text-white" : ""
          }`}
        >
          NOTIFICATIONS
        </h1>
        {/* employeeDepartment: "hr"
employeeId: "A1"
employeeName: "Admin One"
rejection_reason: ""
status: "Forwarded"
time_elapsed: 19635
time_received: "2022-08-26T09:25:56.354Z"
time_returned: "2022-08-26T09:26:15.989Z" */}

        {notification.map((item: any, index: number) => (
          <div
            className={`${
              theme === "Dark" ? "bg-gray-825" : "bg-white"
            } h-18 rounded-2xl mb-4 shadow-xl px-8 py-4`}
            key={index}
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-4 items-center">
                <img src={Man} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h1
                    className={`text-sm font-light  ${
                      theme === "Dark" ? "text-gray-150" : "text-gray-750"
                    }`}
                  >
                    <span className="font-medium">{item.employeeName}</span> has{" "}
                    <span className="font-medium">
                      {item?.status?.toLowerCase()}
                    </span>{" "}
                    your mail.
                  </h1>
                  {item?.rejection_reason?.length > 0 && (
                    <h1 className="text-sm font-medium text-gray-550">
                      {item.rejection_reason}
                    </h1>
                  )}
                </div>
              </div>

              <h1 className="font-medium text-sm text-gray-450">{item.time}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
