import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./router";
import AutoLogin from "components/AutoLogin";
import AuthLayout from "layouts/Auth";
import LanguageControl from "layouts/LanguageControl";
import { I18nextProvider } from "react-i18next";
import i18next from "language";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <AutoLogin />
        <BrowserRouter>
          <Routes>
            <Route path="/:lang?" element={<LanguageControl />}>
              <Route path="" element={<HomePage />}></Route>
              <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="" element={<LoginPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
