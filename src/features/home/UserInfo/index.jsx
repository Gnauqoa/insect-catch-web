import { Avatar, IconButton, Typography } from "@mui/material";
import React from "react";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Introduce = () => {
  return (
    <div className="flex flex-col gap-8 pb-16 items-center justify-center border-b-[1px] border-[#979CA5]">
      <Avatar
        sx={{
          width: "150px",
          height: "150px",
        }}
      />
      <div className="flex flex-col gap-2 items-center justify-center">
        <Typography
          sx={{
            fontSize: 36,
            fontWeight: 700,
            color: "#121212",
          }}
        >
          Gnauq
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 400,
            color: "#979CA5",
          }}
        >
          Farmer
        </Typography>
      </div>
    </div>
  );
};

const Reminders = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Reminders
        </Typography>
        <div className="ml-auto">
          <IconButton
            sx={{
              background: "#ffffff",
            }}
          >
            <NotificationsOutlinedIcon
              sx={{
                color: "#000000"
              }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const UserInfo = () => {
  return (
    <div className="flex flex-col w-[35%] h-full gap-8 p-12 pt-[70px] bg-[#F6F2DD] rounded-r-[40px]">
      <Introduce />
      <Reminders />
    </div>
  );
};

export default UserInfo;
