import React from "react";

const DeviceInfo = ({ name, create, status, energy }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row w-[300px]">
        <img />
        <div className="flex flex-col">
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="flex flex-row gap-́"></div>
    </div>
  );
};

const InfoShow = () => {
  return (
    <div className="flex flex-row">
      <p className="font-[400] text-[20px] text-[#94918A] w-[300px]">Name</p>
      <div className="flex flex-row gap-12">
        <p className="font-[400] text-[20px] text-[#94918A]">Create</p>
        <p className="font-[400] text-[20px] text-[#94918A]">Status</p>
        <p className="font-[400] text-[20px] text-[#94918A]">Energy</p>
      </div>
    </div>
  );
};

const DeviceList = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <p className="font-[700] text-[24px]">Your device</p>
      <InfoShow />
      <div className="flex flex-col gap-8">
        <DeviceInfo />
      </div>
    </div>
  );
};

export default DeviceList;
