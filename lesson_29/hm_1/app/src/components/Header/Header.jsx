import { useLang } from "../../hooks/useLang";
import "./Header.scss";

const Header = () => {
  const { lang, langData, handleChangeLang } = useLang();

  return (
    <header className="card__header">
      <h1 className="title">{langData.titleTodo}</h1>
      <div className="lang" onClick={handleChangeLang}>
        {lang}
      </div>
    </header>
  );
};

export default Header;
