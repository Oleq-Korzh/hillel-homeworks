import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../store/features/lang/langActions";

export const useLang = () => {
  const dispatch = useDispatch();
  const { lang, data: langData } = useSelector((state) => state.lang);

  const handleChangeLang = () => {
    const nextLang = lang === "UA" ? "EN" : "UA";

    dispatch(changeLang(nextLang));
  };

  return { lang, langData, handleChangeLang };
};
