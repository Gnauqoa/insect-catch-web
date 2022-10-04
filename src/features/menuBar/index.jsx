import React, { useState } from "react";


import MenuBarDesktop from "./Desktop.jsx";
import MenuBarMobile from "./Mobile/index.jsx";


const MenuBar = () => {
  return (
    <div>
      <div className="xl:flex hidden h-full">
        <MenuBarDesktop/>
      </div>
      <div className="flex xl:hidden">
        <MenuBarMobile/>
      </div>
    </div>
  );
};

export default MenuBar;
