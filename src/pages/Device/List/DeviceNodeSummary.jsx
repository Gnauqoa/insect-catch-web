import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as IconCube } from "assets/icon/icon_cube.svg";
import { Link, useParams } from "react-router-dom";

const DeviceNodeSummary = ({ name, checked, id }) => {
  const { lang } = useParams();
  return (
    <Link to={`/${lang}/dashboard/device/${id}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
          padding: "16px 24px",
          boxShadow: checked ? "0px 0px 16px 0px rgba(33,34,39,0.1)" : "",
          borderRadius: "4px",
          borderLeft: checked ? "5px solid #056838" : "",
          borderLeftStyle: "solid",
          borderLeftWidth: checked ? "5px" : "",
          borderLeftColor: checked ? "primary.main" : "",
          ":hover": {
            border: "1px solid #03030A05",
            borderLeftWidth: checked ? "5px" : "1px",
            borderLeftColor: checked ? "primary.main" : "#03030A05",
            background: "#03030A05",
            boxShadow: "0px 0px 16px 0px rgba(33,34,39,0.1)",
          },
          cursor: "pointer",
          color: checked ? "primary.main" : "text_neutral",
          transition: "box-shadow .4s ease, all .1s ease",
        }}
      >
        <SvgIcon
          component={IconCube}
          inheritViewBox={true}
          sx={{ width: 24, height: 24 }}
        />
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

export default DeviceNodeSummary;
