import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "./router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
