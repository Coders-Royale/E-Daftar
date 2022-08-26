import { createContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { Routes, Route, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/registration/SignIn";
import ForgotPassword from "./pages/registration/ForgotPassword";
import NewPassword from "./pages/registration/NewPassword";
import CreateNewEmployee from "./pages/admin/CreateNewEmployee";
import Dashboard from "./pages/admin/Dashboard";
import Tracking from "./pages/admin/Tracking";
import Notifications from "./pages/admin/Notifications";
import Profile from "./pages/user/Profile";
import Sent from "./pages/user/Sent";
import NewMessage from "./pages/user/NewMessage";
import Primary from "./pages/user/Primary";
import Pending from "./pages/user/Pending";
import Approved from "./pages/user/Approved";
import Rejected from "./pages/user/Rejected";
import Toggle from "./components/ThemeToggle";
import useSound from "use-sound";
import { FilesProvider } from "./contexts/files.context";

import getSocket from "./helpers/socket";

const boopSfx = require("./music.mp3");

const socket = getSocket(); // returns an instance of getSocket.

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const msg = new SpeechSynthesisUtterance();

interface AppContextInterface {
  theme: "Light" | "Dark" | "SweetMorning" | "BrightVault" | "Superman";
  setTheme: any;
  notification: any[];
  setNotification: any;
}
// color === "Light" || color === "Dark"
// ? ""
// : color === "Sweet Morning"
// ? "from-[#FF5F6D] to-[#FFC371]"
// : null

export const AppContext = createContext<AppContextInterface>({
  theme: "Light",
  setTheme: null,
  notification: [],
  setNotification: null,
});

export const COLORS = {
  Light: {
    name: "Light",
    class: "bg-gradient-to-r from-[#2268FE] to-[#12E2EF]",
    classBottom: "bg-gradient-to-b from-[#2268FE] to-[#12E2EF]",
    gr_top: "from-[#2268FE]",
    gr_bot: "to-[#12E2EF]",
    text_top: "text-[#13AAFF]",
    text_bot: "text-[#2268FE]",
    bg_top: "bg-[#13AAFF]",
    bg_bot: "bg-[#2268FE]",
    border: "border-[#13AAFF]",
  },
  Dark: {
    class: "bg-gradient-to-r from-[#2268FE] to-[#12E2EF]",
    classBottom: "bg-gradient-to-b from-[#2268FE] to-[#12E2EF]",
    gr_top: "from-[#2D5063]",
    gr_bot: "to-[#202020]",
    name: "Dark",
    text_top: "text-[#2D5063]",
    text_bot: "text-[#202020]",
    bg_top: "bg-[#2D5063]",
    bg_bot: "bg-[#202020]",
    border: "border-[#12E2EF]",
  },
  SweetMorning: {
    class: "bg-gradient-to-r from-[#FF5F6D] from-green-350 to-[#FFC371]",
    classBottom: "bg-gradient-to-b from-[#FF5F6D] to-[#FFC371]",
    gr_top: "from-[#FF5F6D]",
    gr_bot: "to-[#FFC371]",
    name: "Sweet Morning",
    text_top: "text-[#FF5F6D]",
    text_bot: "text-[#FFC371]",
    bg_top: "bg-[#FF5F6D]",
    bg_bot: "bg-[#FFC371]",
    border: "border-[#FF5F6D]",
  },
  BrightVault: {
    class: "bg-gradient-to-r from-[#00d2ff] to-[#928DAB]",
    classBottom: "bg-gradient-to-b from-[#00d2ff] to-[#928DAB]",
    gr_top: "from-[#00d2ff]",
    gr_bot: "to-[#928DAB]",
    name: "Bright Vault",
    text_top: "text-[#00d2ff]",
    text_bot: "text-[#928DAB]",
    bg_top: "bg-[#00d2ff]",
    bg_bot: "bg-[#928DAB]",
    border: "border-[#00d2ff]",
  },
  Superman: {
    class: "bg-gradient-to-r from-[#0099F7] to-[#F11712]",
    classBottom: "bg-gradient-to-b from-[#0099F7] to-[#F11712]",
    gr_top: "from-[#0099F7]",
    gr_bot: "to-[#F11712]",
    name: "Superman",
    text_top: "text-[#0099F7]",
    text_bot: "text-[#F11712]",
    bg_top: "bg-[#0099F7]",
    bg_bot: "bg-[#F11712]",
    border: "border-[#0099F7]",
  },
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [theme, setTheme] = useState<any>("Light");
  const [notification, setNotification] = useState<any[]>([]);
  const [socketConnection, setSocketConnection] =
    useState<Socket<ServerToClientEvents, ClientToServerEvents>>(socket);
  const navigate = useNavigate();

  const [isEnabled, setIsEnabled] = useState(false);
  const [speakText, setSpeakText] = useState("");
  const [play] = useSound(boopSfx);

  useEffect(() => {
    console.log("updated");
    play();
  }, [notification]);

  window.addEventListener("mouseover", (event) => {
    if (event?.srcElement instanceof HTMLElement) {
      if (!event?.srcElement?.innerHTML.includes("</")) {
        setSpeakText(event?.srcElement?.innerText);
      }
    }
  });

  useEffect(() => {
    if (isEnabled) {
      window.speechSynthesis.cancel();
      msg.text = speakText;
      window.speechSynthesis.speak(msg);
    }
  }, [speakText, isEnabled]);

  window.addEventListener("keydown", (e) => {
    if (e?.keyCode === 18) {
      setIsEnabled(!isEnabled);
    }
  });

  // Auto Login
  useEffect(() => {
    if (
      localStorage.getItem("rememberMe") === "true" &&
      localStorage.getItem("jwtToken")
    ) {
      navigate(
        "/" +
          (localStorage.getItem("empId")?.slice(0, 1) === "E"
            ? "user"
            : "admin") +
          "/primary"
      );
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
        notification: notification,
        setNotification: setNotification,
      }}
    >
      <div className="font-roboto">
        {window.location.pathname === "/" ? null : (
          <div className="absolute right-0 top-0 mr-8 mt-2">
            <Toggle
              isEnabled={isEnabled}
              color={color}
              setColor={setColor}
              setIsEnabled={setIsEnabled}
            />
          </div>
        )}
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route
              path="/:user/new-employee"
              element={
                <CreateNewEmployee
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/dashboard"
              element={
                <Dashboard
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/tracking"
              element={
                <Tracking
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/notifications"
              element={
                <Notifications
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/profile"
              element={
                <Profile
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/sent"
              element={
                <Sent
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/pending"
              element={
                <Pending
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/approved"
              element={
                <Approved
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/rejected"
              element={
                <Rejected
                  selected={selected}
                  setSelected={setSelected}
                  color={color}
                />
              }
            />
            <Route
              path="/:user/new-message"
              element={
                <FilesProvider>
                  <NewMessage
                    selected={selected}
                    setSelected={setSelected}
                    socketConnection={socketConnection}
                    color={color}
                  />
                </FilesProvider>
              }
            />
            <Route
              path="/:user/primary"
              element={
                <Primary
                  selected={selected}
                  setSelected={setSelected}
                  socketConnection={socketConnection}
                  color={color}
                />
              }
            />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </AppContext.Provider>
  );
};

export default App;
