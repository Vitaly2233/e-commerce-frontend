import { Button, TextField } from "@mui/material";
import "./styles.scss";
import useUserStore from "../../Stores/UserStore";

const Login: React.FC = () => {
  const email = useUserStore((state) => state.email);
  const password = useUserStore((state) => state.password);
  const setEmail = useUserStore((state) => state.setEmail);
  const setPassword = useUserStore((state) => state.setPassword);
  const sendData = useUserStore((state) => state.sendData);

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
