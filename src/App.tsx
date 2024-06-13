import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
