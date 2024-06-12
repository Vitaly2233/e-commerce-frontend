import { Button, TextField } from "@mui/material";
import "./styles.scss";

const Login: React.FC = () => {
  return (
    <div className="container">
      <h2 className="label">Login</h2>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
      />
      <TextField
        className="inputField"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default Login;
