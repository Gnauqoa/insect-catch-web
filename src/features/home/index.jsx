import { Container } from "@mui/material";
import React from "react";
import DeviceList from "./DeviceList";
import Introduce from "./Introduce";

const MainArea = () => {
  return (
    <div className="flex flex-col bg-[#FBFAF4] p-6 pl-8 w-full rounded-[32px]">
      <div className="flex flex-col gap-12">
        <Introduce />
        <DeviceList />
      </div>
    </div>
  );
};

const UserInfo = () => {
  return <div className="flex flex-col"></div>;
};
const Home = () => {
  return (
    <Container
      sx={{
        background: "#f3e28a",
      }}
    >
      <div className="flex flex-row p-8">
        <MainArea />
        <UserInfo />
      </div>
    </Container>
  );
};

export default Home;
