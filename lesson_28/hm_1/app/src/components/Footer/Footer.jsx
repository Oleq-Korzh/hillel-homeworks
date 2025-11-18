import "./Footer.scss";

const Footer = ({ count = 0 }) => {
  return (
    <footer className="footer">
      Показано <span className="count">{count}</span> задач
    </footer>
  );
};

export default Footer;
