import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const VideoBody = () => {
  return (
    <>
      <Header />
      <div className="flex gap-8 h-max scrollbar-hide ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default VideoBody;
