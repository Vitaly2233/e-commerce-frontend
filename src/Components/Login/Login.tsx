import { Button, TextField } from "@mui/material";
import "./styles.scss";
import useUserStore from "../../Stores/UserStore";
import { redirect } from "react-router-dom";
import { setUpToken } from "../../Requests";

const Login: React.FC = () => {
  const email = useUserStore().email;
  const password = useUserStore().password;
  const setEmail = useUserStore().setEmail;
  const setPassword = useUserStore().setPassword;
  const sendData = useUserStore().sendData;

  const savedToken = localStorage.getItem("token");
  if (savedToken) {
    setUpToken();
    redirect("/home");
  }

  return (
    <div className="container">
      <h2 className="label">Login</h2>
      <div className="textFieldMargin">
        <TextField
          className="textFieldMargin"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>
      <div className="textFieldMargin">
        <TextField
          className="textFieldMargin"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </div>
      <Button
        onClick={() => {
          sendData(email, password);
        }}
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
