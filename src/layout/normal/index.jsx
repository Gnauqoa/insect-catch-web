import React from "react";
import MenuBar from "./../../features/menuBar/index";
import { Outlet } from "react-router-dom";

const NormalLayout = () => {
  return (
    <div className="flex flex-row w-full h-full min-h-screen bg-gradient-to-br from-[#f1ecd0] to-[#f3e28a]">
      <MenuBar />
      <div className="flex flex-row p-16">
        <div className="bg-[#ffffff] rounded-[40px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NormalLayout;
