import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
