import React, { useEffect, useState } from "react";
import { getDeviceInfoData } from "./data";
import ConnectedIcon from "./assets/connected.png";
import DisconnectIcon from "./assets/disconnect.png";

const DeviceInfo = ({ imgUrl, name, desc, create, status, battery }) => {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-row w-[300px] gap-4 max-h-[100px] items-center">
        <img
          className="w-[60px] h-auto object-cover"
          src={imgUrl}
          alt="device"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#121212] font-[700] text-[20px]">{name}</p>
          <p className="text-[#94918A] font-[400] text-[14px]">{desc}</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <p className="font-[700] text-[17px] text-[#121212] w-[150px]">
          {create}
        </p>
        <div className="w-[150px] ">
          {
            <img
              className="w-[35px]"
              src={status ? ConnectedIcon : DisconnectIcon}
            />
          }
        </div>
        <p className="font-[700] text-[17px] text-[#121212] w-[150px]">
          {battery}%
        </p>
      </div>
    </div>
  );
};

const InfoShow = () => {
  return (
    <div className="flex flex-row">
      <p className="font-[400] text-[20px] text-[#94918A] w-[300px]">Name</p>
      <div className="flex flex-row">
        <p className="font-[400] text-[20px] text-[#94918A] w-[150px]">
          Create
        </p>
        <p className="font-[400] text-[20px] text-[#94918A] w-[150px]">
          Status
        </p>
        <p className="font-[400] text-[20px] text-[#94918A] w-[150px]">
          Battery
        </p>
      </div>
    </div>
  );
};

const DeviceList = () => {
  const [deviceData, setDeviceData] = useState([]);
  useEffect(() => {
    setDeviceData(getDeviceInfoData());
  }, []);
  console.log(deviceData);
  return (
    <div className="flex flex-col gap-6 ">
      <p className="font-[700] text-[24px]">Your device</p>
      <InfoShow />
      <div className="flex flex-col gap-8">
        {deviceData.map((data, index) => (
          <DeviceInfo
            key={"device info " + index}
            imgUrl={data.imgUrl}
            desc={data.desc}
            name={data.name}
            create={data.create}
            status={data.status}
            battery={data.battery}
          />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
