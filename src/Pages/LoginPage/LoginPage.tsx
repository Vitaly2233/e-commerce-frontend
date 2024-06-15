import "./styles.scss";
import Login from "../../Components/Login/Login";
import useUserStore from "../../Stores/UserStore";
import { useEffect } from "react";

const LoginPage: React.FC = () => {
  const setToken = useUserStore((state) => state.setToken);
  const checkToken = useUserStore((state) => state.checkToken);

  const token = localStorage.getItem("token");

  if (token) setToken(token);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="container">
      <Login></Login>
    </div>
  );
};

export default LoginPage;
