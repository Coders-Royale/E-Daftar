import { Routes, Route } from "react-router-dom";

// import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";

const App: React.FC = () => {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
