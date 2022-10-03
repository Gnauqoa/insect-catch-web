import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Home from "./features/home";
import { Box, Container } from "@mui/material";
import MenuBar from "./features/menuBar";
const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Box
        sx={{
          background: "linear-gradient(to right bottom, #f1ecd0, #f5e48b)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="h-screen">
          <MenuBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<p>There's nothing here!</p>} />
          </Routes>
          <Outlet />
          <div className="flex pt-40"></div>
        </div>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
