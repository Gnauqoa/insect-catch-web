import React from "react";
import DeviceList from "./DeviceList";
import UserInfo from "./UserInfo";
import Alert1 from "./assets/alert1.png";
import Alert2 from "./assets/alert2.png"
const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="font-[700] text-[48px]">Home</p>
      <p className="font-[400] text-[#979CA5] text-[16px]">
        Welcome back, Bella! Your progress is really good. Keep it up
      </p>
      <div className="flex flex-row w-full gap-6 overflow-hidden  ">
        <img
          className="h-full w-full object-cover overflow-hidden  rounded-[32px]"
          src={Alert1}
        />
        <img
          className="h-full w-full object-cover	overflow-hidden  rounded-[32px]"
          src={Alert2}
        />
      </div>
    </div>
  );
};

const MainArea = () => {
  return (
    <div className="flex flex-col p-14 pr-0 w-full h-full rounded-[32px]">
      <div className="flex flex-col gap-12 w-full h-full">
        <Introduce />
        <DeviceList />
      </div>
    </div>
  );
};

const UserArea = () => {
  return <UserInfo />;
};

const Home = () => {
  return (
    <div className="flex flex-row w-full h-full gap-[60px]">
      <MainArea />
      <UserArea />
    </div>
  );
};

export default Home;
