import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/registration/SignIn";
import ForgotPassword from "./pages/registration/ForgotPassword";
import NewPassword from "./pages/registration/NewPassword";
import CreateNewEmployee from "./pages/admin/CreateNewEmployee";
import Dashboard from "./pages/admin/dashboard";
import Tracking from './pages/admin/Tracking';
import Notifications from './pages/admin/Notifications';
import Profile from './pages/user/Profile';
import Sent from './pages/user/Sent';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="font-roboto">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/admin/new-employee" element={<CreateNewEmployee />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tracking" element={<Tracking />} />
          <Route path="/admin/notifications" element={<Notifications />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path='/user/sent' element={<Sent />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
