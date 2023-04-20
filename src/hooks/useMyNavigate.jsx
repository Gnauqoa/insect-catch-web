import { useNavigate, useParams } from "react-router-dom";

const useMyNavigate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const myNavigate = (url) => {
    const { lang } = params;
    if (lang) {
      navigate(`/${lang}${url}`);
      return;
    }
    navigate(`/en${url}`);
  };
  return myNavigate;
};

export default useMyNavigate;
