import React from "react";

import Alert1 from "./assets/alert1.png";

const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-h-[50%]">
      <p className="font-[700] text-[48px]">Home</p>
      <p className="font-[400] text-[#979CA5] text-[16px]">
        Welcome back, Bella! Your progress is really good. Keep it up
      </p>
      <div className="flex flex-row w-full gap-6 overflow-hidden ">
        <img className=" object-cover	overflow-hidden w-full rounded-[32px]" src={Alert1} />
        <img className=" object-cover	overflow-hidden w-full rounded-[32px]" src={Alert1} />
      </div>
    </div>
  );
};

export default Introduce;
