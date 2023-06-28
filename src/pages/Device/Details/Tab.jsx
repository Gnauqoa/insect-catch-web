import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Tab = ({ checked, title, to }) => {
  return (
    <Link to={to}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 24px",
          borderBottom: "3px solid",
          borderColor: checked ? "secondary.main" : "#03030A0F",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: checked ? "secondary.main" : "text_neutral",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
};

export default Tab;
