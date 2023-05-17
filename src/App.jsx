import { CircularProgress, ThemeProvider } from "@mui/material";
import theme from "./theme";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { DevicePage, HomePage, LoginPage, RegisterPage } from "./router";
import AutoLogin from "components/AutoLogin";
import AuthLayout from "layouts/Auth";
import LanguageControl from "layouts/LanguageControl";
import { I18nextProvider } from "react-i18next";
import i18next from "language";
import { useSelector } from "react-redux";
import DashBoardLayout from "layouts/Dashboard";

const PrivateRouter = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  const location = useLocation();
  if (!loginStatus.isChecking) {
    if (loginStatus.isLogin) return <Outlet />;
    return <Navigate state={{ from: location }} to="/auth/login" />;
  }
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <CircularProgress />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <AutoLogin />
        <BrowserRouter>
          <Routes>
            <Route path="/:lang?" element={<LanguageControl />}>
              <Route
                path=""
                element={<Navigate to={"dashboard/device"} />}
              ></Route>
              <Route path="dashboard" element={<PrivateRouter />}>
                <Route path="" element={<DashBoardLayout />}>
                  <Route
                    path="device/:device_id?"
                    element={<DevicePage />}
                  ></Route>
                </Route>
              </Route>
              <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
