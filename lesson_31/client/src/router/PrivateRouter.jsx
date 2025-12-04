import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { urls } from "./menu";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to={urls.AUTH} replace />;
  }

  return children;
}
