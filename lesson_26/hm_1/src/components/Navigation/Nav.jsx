import { NavLink } from "react-router";
import { useContext } from "react";
import routes from "../../utils/routes";
import ThemeContext from "../../context/Theme/ThemeContext";
import LanguageContext from "../../context/Language/LanguageContent";
import "./Nav.scss";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, handleChangeLang } = useContext(LanguageContext);

  const setActiveClass = (className) => {
    return ({ isActive }) => {
      return `${className} ${isActive ? "active" : ""}`;
    };
  };

  const handleChangeTheme = () => {
    toggleTheme();
  };

  const handleSetLang = () => {
    handleChangeLang();
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink className={setActiveClass("nav__item")} to={routes.home}>
          {language.contactPage}
        </NavLink>
        <NavLink className={setActiveClass("nav__item")} to={routes.form}>
          {language.contactPageAdd}
        </NavLink>
      </ul>
      <div className="theme">
        <span onClick={handleChangeTheme}>{theme}</span>
        <span onClick={handleSetLang}>{language.name}</span>
      </div>
    </nav>
  );
};

export default Nav;
