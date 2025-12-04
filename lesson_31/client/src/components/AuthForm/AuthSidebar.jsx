import { useDispatch } from "react-redux";
import { logoutAsync } from "../../store/features/auth";
import { useNavigate } from "react-router";
import "./AuthSidebar.css";
import { urls } from "../../router/menu";

export default function AuthSidebar({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate(urls.AUTH);
  };

  return (
    <div>
      <span>
        <b>User:</b> {user?.name} / <b>Role:</b> {user?.role}
      </span>
      <span className="logout" onClick={handleLogout}>
        Выйти
      </span>
    </div>
  );
}
