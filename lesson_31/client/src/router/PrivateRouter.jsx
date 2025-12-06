import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { urls } from "./menu";

export default function ProtectedRoute({ children }) {
  const { isAuth, loaded } = useSelector((state) => state.auth);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to={urls.AUTH} replace />;
  }

  return children;
}
