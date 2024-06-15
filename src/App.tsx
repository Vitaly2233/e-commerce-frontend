import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import useUserStore from "./Stores/UserStore";
import HomePage from "./Pages/Home/HomePage";

function App() {
  const token = useUserStore((state) => state.token);

  const privateRoutes: RouteObject[] = [
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <Navigate to={"/home"} replace />,
    },
  ];

  const publicRoutes: RouteObject[] = [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
  ];

  const router = createBrowserRouter(token ? privateRoutes : publicRoutes);

  return <RouterProvider router={router} />;
}

export default App;
