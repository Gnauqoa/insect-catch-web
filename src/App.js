import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./store";
import theme from "./theme";
import Home from "./features/home";

import NormalLayout from "./layout/normal";
import AuthLayout from "./layout/auth";

import Login from "./features/auth/login";
import Register from "./features/auth/register";
import DevicePage from "./features/device";
import DeviceControl from "./features/deviceControl";

const App = () => (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<NormalLayout />}>
              <Route index element={<Home />} />
              <Route path="device">
                <Route index element={<DevicePage />} />
                <Route path="control" element={<DeviceControl />} />
              </Route>
              <Route path="*" element={<p>There's nothing here!</p>} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              <Route path="*" element={<p>There's nothing here!</p>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  </ThemeProvider>
);
export default App;
