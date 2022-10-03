import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Home from "./features/home";
import { Box } from "@mui/material";
import MenuBar from "./features/menuBar";
const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Box
        sx={{
          background: "linear-gradient(to right bottom, #f1ecd0, #f5e48b)",
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div className="min-h-screen flex flex-row gap-8 w-full">
          <MenuBar />
          <div className="flex flex-col p-8 w-full">
            <div className="flex flex-col h-full w-full bg-[#ffffff] rounded-[40px] shadow-2xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<p>There's nothing here!</p>} />
              </Routes>
            </div>
          </div>

          <Outlet />
        </div>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
