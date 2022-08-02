import { useEffect, useState } from "react";
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

import getSocket from "./helpers/socket";

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

const App: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [socketConnection, setSocketConnection] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>(socket);
  const navigate = useNavigate();

  // Auto Login
  useEffect(() => {
    if (
      localStorage.getItem("rememberMe") === "true" &&
      localStorage.getItem("jwtToken")
    ) {
      navigate("/user/profile");
    }
  }, []);

  return (
    <div className="font-roboto">
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
              />
            }
          />
          <Route
            path="/:user/dashboard"
            element={
              <Dashboard selected={selected} setSelected={setSelected} />
            }
          />
          <Route
            path="/:user/tracking"
            element={<Tracking selected={selected} setSelected={setSelected} />}
          />
          <Route
            path="/:user/notifications"
            element={
              <Notifications selected={selected} setSelected={setSelected} />
            }
          />
          {/* Make the primary page as the landing page when the page is ready. */}
          <Route
            path="/:user/profile"
            element={<Profile selected={selected} setSelected={setSelected} socketConnection={socketConnection} />}
          />
          <Route
            path="/:user/sent"
            element={<Sent selected={selected} setSelected={setSelected} />}
          />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
