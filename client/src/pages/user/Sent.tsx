import React, { } from "react";
import Sidebar from "../../components/Sidebar";
import Middlebar from '../../components/Middlebar';

import SearchIcon from '@mui/icons-material/Search';
import Man from '../../images/man.svg';

const Sent = () => {
 
  return (
    <div className="h-screen flex bg-white overflow-hidden">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-full overflow-scroll">
        <div className="w-1/3">
          <Middlebar />
        </div>
      </div>
    </div>
  );
};

export default Sent;
