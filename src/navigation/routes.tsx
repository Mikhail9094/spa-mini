import MainLayout from "../components/MainLayout";
import Contracts from "../pages/Contracts";
import LoginPage from "../pages/Login";

export const publicRoutes = [{ path: "/login", element: <LoginPage /> }];

export const privateRoutes = {
  path: "/",
  element: <MainLayout />,
  indexElement: <Contracts />,
  children: [
    { path: "/orders", element: <h1>Заказы</h1> },
    { path: "/tasks", element: <h1>Поручения</h1> },
    { path: "/contractors", element: <h1>Контрагенты</h1> },
    { path: "/staff", element: <h1>Персонал</h1> },
  ],
};
