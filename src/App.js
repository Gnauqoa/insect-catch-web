import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<div className="w-full h-[500px] bg-[#000]"></div>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
