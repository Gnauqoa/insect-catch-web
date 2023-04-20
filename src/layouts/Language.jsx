import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const isLangValid = (lang) => {
  return lang !== null;
};

const LanguageLayout = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const { lang } = params;
    if (isLangValid(lang)) return;
    if (lang) return;
    const path_array = location.pathname.split("/");
    let url = "";
    for (let i = 1; i < path_array.length; ++i) url += `/${path_array[i]}`;
    navigate(`/en${url}`);
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LanguageLayout;
