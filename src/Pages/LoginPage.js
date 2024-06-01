import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import logo from "./../components/images/logo.png";
export default function Home() {
  const theme = useTheme();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        userName,
        userPassword,
      });
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ display: "flex", width: "80%", height: "80vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              m: 1,
              width: "50%",
              padding: 4,
              backgroundColor: "rgb(22, 64, 122)",
              marginBottom: 2,
            }}
            onClick={handleSubmit}
          >
            Login With PlazerUser
          </Button>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            sx={{ marginBottom: 5 }}
          >
            Or
          </Typography>

          <TextField
            id="uname"
            label="User Name"
            variant="filled"
            sx={{ m: 1, width: "50%" }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            error={error}
            FormHelperTextProps={{ error: true }}
          />

          <FormControl
            sx={{ m: 1, width: "50%", marginBottom: 3 }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              error={error}
              FormHelperTextProps={{ error: true }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            variant="contained"
            sx={{
              m: 1,
              width: "50%",
              padding: 2,
              backgroundColor: "rgb(22, 64, 122)",
              marginBottom: 2,
            }}
            onClick={handleSubmit}
          >
            Login
          </Button>

          {error && (
            <Alert sx={{ width: "45%", m: 1 }} severity="error">
              {error}
            </Alert>
          )}

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          ></Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            backgroundColor: "rgb(22, 64, 122)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "120%" }}
            image={logo}
            alt="Live from space album cover"
          />
        </Box>
      </Card>
    </Box>
  );
}
