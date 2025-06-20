import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import logo_devnology from "../../assets/logo_devnology.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

export function Header() {
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/cart");
  };
  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ backgroundColor: "white" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          minWidth="100%"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            width="100%"
          >
            <Link to="/homepage" style={{ textDecoration: "none" }}>
              <Stack direction="row" alignItems="center" width="172px">
                <img src={logo_devnology} width="100%" alt="logo Devnology" />
              </Stack>
            </Link>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              gap={5}
            >
              <Link to="/homepage" style={{ textDecoration: "none" }}>
                <Typography fontSize="14px" fontWeight="650" color="black">
                  Produtos
                </Typography>
              </Link>
              <Link to="/orders" style={{ textDecoration: "none" }}>
                <Typography fontSize="14px" fontWeight="650" color="black">
                  Meus Pedidos
                </Typography>
              </Link>
              <IconButton sx={{ color: "black" }} onClick={handleGoToCart}>
                <ShoppingCartIcon />
              </IconButton>
              <IconButton sx={{ color: "black" }} onClick={handleLogOut}>
                <LogoutIcon />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
