import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  TextField,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Header } from "../../components/Header";

const produtos = [
  {
    id: 1,
    nome: "Produto A",
    preco: 49.99,
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nome: "Produto B",
    preco: 29.99,
    imagem: "https://loremflickr.com/640/480/people",
  },
  {
    id: 3,
    nome: "Produto C",
    preco: 99.9,
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    nome: "Produto D",
    preco: 99.9,
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    nome: "Produto E",
    preco: 99.9,
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    nome: "Produto F",
    preco: 99.9,
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    nome: "Produto G",
    preco: 99.9,
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    nome: "Produto H",
    preco: 99.9,
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    nome: "Produto I",
    preco: 99.9,
    imagem: "https://via.placeholder.com/150",
  },
];

export function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container maxWidth={false} sx={{ width: "99vw", mt: "100px" }}>
        <Typography variant="h4" gutterBottom>
          Produtos
        </Typography>

        <Box mb={3}>
          <TextField
            variant="outlined"
            placeholder="Buscar produtos..."
            fullWidth
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>

        <Box display="flex" flexWrap="wrap" gap={3}>
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              sx={{
                width: "250px",
                backgroundColor: "#EAF7F2",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                borderRadius: "16px",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={produto.imagem}
                alt={produto.nome}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {produto.nome}
                </Typography>
                <Typography color="text.secondary">
                  R$ {produto.preco.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    backgroundColor: "#009E60",
                    "&:hover": { backgroundColor: "#007A4A" },
                    borderRadius: "16px",
                  }}
                  onClick={() => navigate(`/produto/${produto.id}`)}
                >
                  Adicionar ao carrinho
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}
