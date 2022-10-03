import React from "react";
import DeviceList from "./DeviceList";
import Introduce from "./Introduce";

const MainArea = () => {
  return (
    <div className="flex flex-col p-6 pl-8 w-[70%] rounded-[32px]">
      <div className="flex flex-col gap-12 w-full">
        <Introduce />
        <DeviceList />
      </div>
    </div>
  );
};

const UserInfo = () => {
  return <div className="flex flex-col"><p>user</p></div>;
};
const Home = () => {
  return (
    <div className="flex flex-row w-full gap-[60px]">
      <MainArea />
      <UserInfo />
    </div>
  );
};

export default Home;
