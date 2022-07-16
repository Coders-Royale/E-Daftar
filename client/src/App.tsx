import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import SignIn from "./pages/registration/SignIn";
import ForgotPassword from "./pages/registration/ForgotPassword";
import NewPassword from "./pages/registration/NewPassword";

import CreateNewEmployee from './pages/admin/CreateNewEmployee';

const App: React.FC = () => {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path='/admin/create-new-employee' element={<CreateNewEmployee />} />
      </Routes>
    </div>
  );
};

export default App;
