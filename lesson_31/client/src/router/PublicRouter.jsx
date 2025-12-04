import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { urls } from "./menu";

export default function PublicRoute({ children }) {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate to={urls.PROJECTS_URL} replace />;
  }

  return children;
}
