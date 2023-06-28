import { defaultLanguage, validLanguage } from "language";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const LanguageControl = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  useEffect(() => {
    const { lang } = params;
    const path_array = location.pathname.split("/");
    let url = "";

    if (!lang) {
      for (let i = 1; i < path_array.length; ++i) url += `/${path_array[i]}`;
      navigate(`/${defaultLanguage}${url}`);
      return;
    }
    for (let i = 2; i < path_array.length; ++i) url += `/${path_array[i]}`;
    if (!validLanguage(lang)) {
      return navigate(`/${defaultLanguage}${url}`);
    }

    i18n.changeLanguage(lang);
  }, [params.lang]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LanguageControl;
