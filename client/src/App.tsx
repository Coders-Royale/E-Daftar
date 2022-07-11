import { Routes, Route } from "react-router-dom";

// import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

const App = () => {

  return (
    <div className="font-nunito">
      {/*<Navbar />*/}

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

    </div>
  );
}

export default App;