import React from "react";
import { useParams } from "react-router-dom";
import DeviceNodeSummary from "./DeviceNodeSummary";
import ColumnName from "./ColumnName";
import DeviceNode from "./DeviceNode";
import { useSelector } from "react-redux";

const DeviceList = () => {
  const { device_id } = useParams();
  const device_list = useSelector((state) => state.deviceList);
  if (device_id)
    return (
      <div className="flex flex-col relative">
        {device_list ? (
          device_list.map((data, index) => (
            <DeviceNodeSummary
              key={`node ${index}`}
              name={data.name}
              checked={device_id === data.id}
              id={data.id}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    );
  return (
    <div className="flex flex-col w-full relative">
      {device_list ? (
        <>
          <ColumnName />
          {device_list.map((data, index) => (
            <DeviceNode
              key={`node ${index}`}
              device_id={data.id}
              status={data.status}
              name={data.name}
              updated_at={data.updated_at}
            />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default DeviceList;
