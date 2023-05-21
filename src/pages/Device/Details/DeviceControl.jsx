import React from "react";
import { useParams } from "react-router-dom";
import Tab from "./Tab";
import ControlPage from "./Control";

const DeviceControl = () => {
  const { page } = useParams();
  return (
    <div className="flex flex-col">
      <TabList />
      <ControlPage checked={page === "control"} />
    </div>
  );
};
const TabList = () => {
  const { device_id, lang, page } = useParams();
  return (
    <div className="flex flex-row ">
      <Tab
        checked={page === "control"}
        title={"Control"}
        to={`/${lang}/dashboard/device/${device_id}/control`}
      />
      <Tab
        checked={page === "history"}
        title={"History"}
        to={`/${lang}/dashboard/device/${device_id}/history`}
      />
    </div>
  );
};
export default DeviceControl;
