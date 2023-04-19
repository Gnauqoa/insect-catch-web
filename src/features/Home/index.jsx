import { Button } from "@mui/material";
import useAPI from "hooks/useApi";
import React, { useEffect } from "react";

const Home = () => {
  const [userData, error, loadingUserData, getUserData] = useAPI({
    url: "/v2/user/current",
    method: "get",
  });
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="flex flex-col w-full h-screen bg-[#000]">
      <Button onClick={getUserData}>click</Button>
    </div>
  );
};

export default Home;
