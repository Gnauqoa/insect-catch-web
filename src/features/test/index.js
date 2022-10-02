import React from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import { REDUCER_PATH } from "./constant";

const TestComponent = () => {
  const { name } = useSelector((state) => state[REDUCER_PATH]);

  return (
    <div className="text-center">
      <Typography variant="h6" gutterBottom component="div">
        Hello a{name}, a {name} coi them cai redux toolkit nhe!!!
      </Typography>
      <h1 className="text-3xl hover:text-blue-600 font-bold">
        Day la example cho tailwind css nhe a {name}
      </h1>
    </div>
  );
};

export default TestComponent;

