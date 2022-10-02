import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>There's nothing here!</p>} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
        <Outlet/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
