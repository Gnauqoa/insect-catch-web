import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Home from "./features/home";

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
