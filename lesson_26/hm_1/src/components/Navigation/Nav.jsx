import classNames from "classnames";
import "./Nav.scss";

const Nav = ({ nav, onNavigate }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li
          className={classNames("nav__item", { active: nav === "contact" })}
          onClick={() => onNavigate("contact")}
        >
          Contact page
        </li>
        <li
          className={classNames("nav__item", { active: nav === "add" })}
          onClick={() => onNavigate("add")}
        >
          Add contact page
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
