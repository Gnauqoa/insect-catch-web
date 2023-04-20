import { defaultLanguage } from "language";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const isLangValid = (lang) => {
  return lang;
};

const LanguageControl = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  useEffect(() => {
    const { lang } = params;
    if (isLangValid(lang)) {
      i18n.changeLanguage(lang)
      return;
    }
    if (lang) return;
    const path_array = location.pathname.split("/");
    let url = "";
    for (let i = 1; i < path_array.length; ++i) url += `/${path_array[i]}`;
    navigate(`/${defaultLanguage}${url}`);
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LanguageControl;
