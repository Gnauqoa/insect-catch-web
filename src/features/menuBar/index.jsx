import React, { useState } from "react";


import MenuBarDesktop from "./Desktop.jsx";
import MenuBarMobile from "./Mobile/index.jsx";


const MenuBar = () => {
  return (
    <div className="xl:relative fixed">
      <div className="xl:flex h-full fixed xl:relative">
        <MenuBarDesktop/>
      </div>
      <div className="flex xl:hidden relative">
        <MenuBarMobile/>
      </div>
    </div>
  );
};

export default MenuBar;
