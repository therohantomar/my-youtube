import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


const VideoBody = () => {
  return (
    <div className="flex gap-8 h-mx scrollbar-hide " >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default VideoBody;
