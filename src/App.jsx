import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./router";
import AutoLogin from "components/AutoLogin";
import AuthLayout from "layouts/Auth";
import LanguageLayout from "layouts/Language";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AutoLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/:lang?" element={<LanguageLayout />}>
            <Route path="" element={<HomePage />}></Route>
            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="" element={<LoginPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
