import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from './pages/NewPassword';

const App: React.FC = () => {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/new-password' element={<NewPassword />} />
      </Routes>
    </div>
  );
};

export default App;
