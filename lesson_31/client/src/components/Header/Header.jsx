import { useSelector } from "react-redux";
import AuthSidebar from "../AuthForm/AuthSidebar";
import Menu from "../Menu/Menu";
import "./Header.css";

export default function Header() {
  const { isAuth, user } = useSelector((state) => state.auth);

  return (
    <div className="Header">
      <Menu />
      {isAuth && <AuthSidebar user={user} />}
    </div>
  );
}
