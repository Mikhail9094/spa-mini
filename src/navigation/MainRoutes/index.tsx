import { Route, Routes, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { useCheckAuth } from "../../hooks/auth/useCheckAuth";

function MainRoutes() {
  const { data: isAuth, isLoading, isFetching } = useCheckAuth();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" && isAuth) {
      window.location.href = "/";
    }
  }, [location, isAuth]);

  if (isLoading || isFetching) return <Loading />;

  return (
    <Routes>
      {!isAuth &&
        publicRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}

      {isAuth && (
        <Route path={privateRoutes.path} element={privateRoutes.element}>
          <Route index element={privateRoutes.indexElement} />

          {privateRoutes.children.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>
      )}
    </Routes>
  );
}

export default MainRoutes;
