import { Route, Routes } from "react-router";
import "./Content.css";
import { menuItems } from "../../router/menu";
import ProtectedRoute from "../../router/PrivateRouter";
import PublicRoute from "../../router/publicRouter";

export default function Content() {
  return (
    <Routes>
      {menuItems.map(
        ({ path, Component, protected: isProtected, public: isPublic }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? (
                <ProtectedRoute>
                  <Component />
                </ProtectedRoute>
              ) : isPublic ? (
                <PublicRoute>
                  <Component />
                </PublicRoute>
              ) : (
                <Component />
              )
            }
          />
        )
      )}
    </Routes>
  );
}
