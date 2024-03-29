import React, { useContext } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import newMessage from "../images/icons/new-message-white.svg";
// import primaryLight from "../images/icons/primary-light.svg";
// import primaryDark from "../images/icons/primary-dark.svg";
// import primaryWhite from "../images/icons/primary-white.svg";
// import sendLight from "../images/icons/send-light.svg";
// import sendDark from "../images/icons/send-dark.svg";
// import sendWhite from "../images/icons/send-white.svg";
// import approveLight from "../images/icons/approve-light.svg";
// import approveDark from "../images/icons/approve-dark.svg";
// import approveWhite from "../images/icons/approve-white.svg";
// import rejectLight from "../images/icons/reject-light.svg";
// import rejectDark from "../images/icons/reject-dark.svg";
// import rejectWhite from "../images/icons/reject-white.svg";
// import pendingLight from "../images/icons/pending-light.svg";
// import pendingDark from "../images/icons/pending-dark.svg";
// import pendingWhite from "../images/icons/pending-white.svg";
// import notificationLight from "../images/icons/notification-light.svg";
// import notificationDark from "../images/icons/notification-dark.svg";
// import notificationWhite from "../images/icons/notification-white.svg";
// import draftLight from "../images/icons/draft-light.svg";
// import draftDark from "../images/icons/draft-dark.svg";
// import draftWhite from "../images/icons/draft-white.svg";
// import profileLight from "../images/icons/profile-light.svg";
// import profileDark from "../images/icons/profile-dark.svg";
// import profileWhite from "../images/icons/profile-white.svg";
// import dashboardLight from "../images/icons/dashboard-light.svg";
// import dashboardDark from "../images/icons/dashboard-dark.svg";
// import dashboardWhite from "../images/icons/dashboard-white.svg";
// import trackingLight from "../images/icons/tracking-light.svg";
// import trackingDark from "../images/icons/tracking-dark.svg";
// import trackingWhite from "../images/icons/tracking-white.svg";
// import createEmployeeLight from "../images/icons/create-employee-light.svg";
// import createEmployeeDark from "../images/icons/create-employee-dark.svg";
// import createEmployeeWhite from "../images/icons/create-employee-white.svg";
import logoutDark from "../images/icons/logout-dark.svg";
import logoutWhite from "../images/icons/logout-white.svg";

import { ThemeContext } from "../themes/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faArrowLeft,
  faChartLine,
  faHouse,
  faMagnifyingGlassLocation,
  faSpinner,
  faThumbsUp,
  faTrash,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faFile,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { AppContext, COLORS } from "../App";

interface Props {
  selected: number;
  setSelected: (selected: number) => void;
  color: string;
}

export default function Sidebar({ selected, setSelected, color }: Props) {
  const { theme, setTheme } = useContext(AppContext);
  const location = useLocation();
  const path = location.pathname;
  const pathArray = path.split("/");

  // const { theme, setTheme } = React.useContext(ThemeContext);

  const navigate = useNavigate();
  const params = useParams();

  // interface SidebarContent1 {
  //   iconLight: string;
  //   iconDark: string;
  //   iconWhite: string;
  //   title: string;
  //   number: string;
  //   to: string;
  // }

  interface SidebarContent2 {
    icon: any;
    title: string;
    number: string;
    to: string;
  }

  const sidebarContent2: SidebarContent2[] = [
    {
      icon: faHouse,
      title: "Primary",
      number: "",
      to: "/" + params.user + "/primary",
    },
    {
      icon: faPaperPlane,
      title: "Sent",
      number: "",
      to: "/" + params.user + "/sent",
    },
    {
      icon: faThumbsUp,
      title: "Approved",
      number: "3",
      to: "/" + params.user + "/approved",
    },
    {
      icon: faTrash,
      title: "Rejected",
      number: "",
      to: "/" + params.user + "/rejected",
    },
    {
      icon: faSpinner,
      title: "Pending",
      number: "2",
      to: "/" + params.user + "/pending",
    },
    {
      icon: faBell,
      title: "Notification",
      number: "",
      to: "/" + params.user + "/notifications",
    },
    {
      icon: faFile,
      title: "Draft",
      number: "",
      to: "/" + params.user + "/draft",
    },
    {
      icon: faUser,
      title: "Profile",
      number: "",
      to: "/" + params.user + "/profile",
    },
    {
      icon: faChartLine,
      title: "Dashboard",
      number: "",
      to: "/admin/dashboard",
    },
    {
      icon: faMagnifyingGlassLocation,
      title: "Tracking",
      number: "",
      to: "/admin/tracking",
    },
    {
      icon: faUserPlus,
      title: "New Employee",
      number: "",
      to: "/admin/new-employee",
    },
  ];

  // const sidebarContent1: SidebarContent1[] = [
  //   {
  //     iconLight: "house",
  //     iconDark: primaryDark,
  //     iconWhite: primaryWhite,
  //     title: "Primary",
  //     number: "",
  //     to: "/" + params.user + "/primary",
  //   },
  //   {
  //     iconLight: sendLight,
  //     iconDark: sendDark,
  //     iconWhite: sendWhite,
  //     title: "Sent",
  //     number: "",
  //     to: "/" + params.user + "/sent",
  //   },
  //   {
  //     iconLight: approveLight,
  //     iconDark: approveDark,
  //     iconWhite: approveWhite,
  //     title: "Approved",
  //     number: "3",
  //     to: "/" + params.user + "/approved",
  //   },
  //   {
  //     iconLight: rejectLight,
  //     iconDark: rejectDark,
  //     iconWhite: rejectWhite,
  //     title: "Rejected",
  //     number: "",
  //     to: "/" + params.user + "/rejected",
  //   },
  //   {
  //     iconLight: pendingLight,
  //     iconDark: pendingDark,
  //     iconWhite: pendingWhite,
  //     title: "Pending",
  //     number: "2",
  //     to: "/" + params.user + "/pending",
  //   },
  //   {
  //     iconLight: notificationLight,
  //     iconDark: notificationDark,
  //     iconWhite: notificationWhite,
  //     title: "Notification",
  //     number: "",
  //     to: "/" + params.user + "/notifications",
  //   },
  //   {
  //     iconLight: draftLight,
  //     iconDark: draftDark,
  //     iconWhite: draftWhite,
  //     title: "Draft",
  //     number: "",
  //     to: "/" + params.user + "/draft",
  //   },
  //   {
  //     iconLight: profileLight,
  //     iconDark: profileDark,
  //     iconWhite: profileWhite,
  //     title: "Profile",
  //     number: "",
  //     to: "/" + params.user + "/profile",
  //   },
  //   {
  //     iconLight: dashboardLight,
  //     iconDark: dashboardDark,
  //     iconWhite: dashboardWhite,
  //     title: "Dashboard",
  //     number: "",
  //     to: "/admin/dashboard",
  //   },
  //   {
  //     iconLight: trackingLight,
  //     iconDark: trackingDark,
  //     iconWhite: trackingWhite,
  //     title: "Tracking",
  //     number: "",
  //     to: "/admin/tracking",
  //   },
  //   {
  //     iconLight: createEmployeeLight,
  //     iconDark: createEmployeeDark,
  //     iconWhite: createEmployeeWhite,
  //     title: "New Employee",
  //     number: "",
  //     to: "/admin/new-employee",
  //   },
  // ];

  return (
    <div
      className={`px-10 py-12 ${
        theme === "Dark" ? "bg-gray-850" : "bg-white"
      } transition-all h-screen overflow-scroll flex flex-col justify-between`}
    >
      <div>
        <Link to={`/` + params.user + `/new-message`}>
          <div
            className={`flex gap-4 items-center py-3 px-5 rounded-lg ${COLORS[theme].class}`}
          >
            <img src={newMessage} alt="" className="w-5 h-5" />
            <p className="text-sm font-semibold text-white">New Message</p>
          </div>
        </Link>
        <div className="mt-6">
          {sidebarContent2
            .slice(0, params.user?.toLocaleLowerCase() === "admin" ? 11 : 8)
            .map((item, index) => (
              <div key={index}>
                <div
                  className={`flex justify-between items-center py-3 px-5 rounded-lg cursor-pointer ${
                    selected === index
                      ? "bg-gray-50 transition-all"
                      : `${
                          theme === "Dark"
                            ? "bg-gray-850 transition-all"
                            : "bg-white transition-all"
                        }`
                  }`}
                  onClick={() => {
                    setSelected(index);
                    navigate(item.to);
                  }}
                >
                  <div className="flex gap-4 items-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`${
                        selected === index
                          ? `${COLORS[theme].text_top}`
                          : `${
                              theme === "Dark"
                                ? "text-gray-150"
                                : "text-gray-500"
                            }`
                      } w-5 h-5`}
                    />
                    <p
                      className={`text-sm font-semibold ${
                        selected === index
                          ? `${COLORS[theme].text_top}`
                          : `${
                              theme === "Dark"
                                ? "text-gray-150"
                                : "text-gray-500"
                            }`
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                  {/* <p
                    className={`font-semibold text-xxs ${
                      selected === index
                        ? "text-white bg-blue-250"
                        : "text-gray-750 bg-gray-350"
                    } ${item.number ? "py-0.5 px-1.5 rounded" : ""}`}
                  >
                    {item.number}
                  </p> */}
                </div>
                {index === 4 || (pathArray[1] === "admin" && index === 7) ? (
                  <hr className="text-gray-450 my-5" />
                ) : null}
              </div>
            ))}
        </div>
      </div>
      <div>
        <hr className="text-gray-450 my-5" />
        <div
          className="flex gap-4 items-center py-3 px-5 cursor-pointer"
          onClick={() => {
            localStorage.removeItem("jwtToken");
            localStorage.removeItem("rememberMe");
            navigate("/sign-in");
          }}
        >
          {/* <img
            src={theme === "dark" ? logoutWhite : logoutDark}
            alt=""
            className="w-5 h-5"
          /> */}
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`${
              theme === "Dark" ? "text-gray-150" : "text-gray-500"
            } w-5 h-5`}
          />
          <p
            className={`text-sm font-semibold transition-all ${
              theme === "Dark" ? "text-gray-150" : "text-gray-500"
            }`}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
