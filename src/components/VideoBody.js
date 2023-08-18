import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


const VideoBody = () => {
  return (
    <div className="flex  w-full gap-4 ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default VideoBody;
