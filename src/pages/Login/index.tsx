import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    setIsDisable(true);
    navigate("/homepage");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DFF1FD",
      }}
    >
      <Box
        sx={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#EBF6FE",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.43)",
        }}
      >
        <Typography variant="h4" mb={2} color="#38526E">
          Login
        </Typography>
        <Box component="form" sx={{ width: "100%" }}>
          <TextField label="Username" fullWidth margin="normal" autoFocus />
          <TextField
            margin="normal"
            fullWidth
            label="Senha"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Grid container justifyContent="flex-end">
            <Link variant="body2" sx={{ cursor: "pointer" }}>
              Esqueci minha senha
            </Link>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={isDisable}
            sx={{ mt: 3, mb: 2, fontSize: "14px" }}
          >
            Entrar
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Não tem uma conta?
          </Typography>
          <Grid container justifyContent="center">
            <Link variant="body2" sx={{ cursor: "pointer" }}>
              Registrar-se
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
