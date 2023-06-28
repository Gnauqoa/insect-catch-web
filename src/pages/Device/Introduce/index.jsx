import React from "react";
import SummaryIntroduce from "./Summary";
import DetailsIntroduce from "./Details";
import { useParams } from "react-router-dom";

const Introduce = () => {
  const { device_id } = useParams();
  if (device_id) return <SummaryIntroduce />;
  return <DetailsIntroduce />;
};

export default Introduce;
