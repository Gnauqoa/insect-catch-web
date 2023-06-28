import { Box, SvgIcon, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DashboardOption = ({ icon, title, checked, to }) => {
  return (
    <Tooltip placement="right" title={title}>
      <Link to={to}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            color: "text_neutral.main",
            background: checked ? "#fbb326" : "#fff",
            ":hover": {
              background: checked ? "#fbb326" : "#fff2db",
            },
            transition: "all 0.1s ease",
          }}
        >
          <SvgIcon
            sx={{ width: 24, height: 24 }}
            component={icon}
            inheritViewBox={true}
          />
        </Box>
      </Link>
    </Tooltip>
  );
};

export default DashboardOption;
