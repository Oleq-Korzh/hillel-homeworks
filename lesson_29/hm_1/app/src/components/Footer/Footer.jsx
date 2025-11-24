import { useLang } from "../../hooks/useLang";
import "./Footer.scss";

const Footer = ({ count = 0 }) => {
  const { langData } = useLang();

  return (
    <footer className="footer">
      {langData?.countTodo?.first} <span className="count">{count}</span>{" "}
      {langData?.countTodo?.second}
    </footer>
  );
};

export default Footer;
