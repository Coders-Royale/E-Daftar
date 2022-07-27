import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/registration/SignIn";
import ForgotPassword from "./pages/registration/ForgotPassword";
import NewPassword from "./pages/registration/NewPassword";
import CreateNewEmployee from "./pages/admin/CreateNewEmployee";
import Dashboard from "./pages/admin/dashboard";
import Tracking from "./pages/admin/Tracking";
import Notifications from "./pages/admin/Notifications";
import Profile from "./pages/user/Profile";
import Sent from "./pages/user/Sent";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
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
          <Route
            path="/:user/profile"
            element={<Profile selected={selected} setSelected={setSelected} />}
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
