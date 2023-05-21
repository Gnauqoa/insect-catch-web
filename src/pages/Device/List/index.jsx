import React from "react";
import { useParams } from "react-router-dom";
import DeviceNodeSummary from "./DeviceNodeSummary";
import ColumnName from "./ColumnName";
import DeviceNode from "./DeviceNode";

const DeviceList = () => {
  const { device_id } = useParams();
  if (device_id)
    return (
      <div className="flex flex-col relative">
        <DeviceNodeSummary
          name="Insert catch"
          checked={device_id === "252"}
          id={252}
        />
        <DeviceNodeSummary
          name="Insert catch 2"
          checked={device_id === "343"}
          id={343}
        />
      </div>
    );
  return (
    <div className="flex flex-col w-full relative">
      <ColumnName />
      <DeviceNode status={false} name="Insert catch" />
    </div>
  );
};
export default DeviceList;
