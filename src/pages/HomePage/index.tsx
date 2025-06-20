import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
  Slider,
} from "@mui/material";
import { Header } from "../../components/Header";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImagemIndisponivel from "../../assets/imagem_indisponivel.jpg";

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

  const [precoRange, setPrecoRange] = useState<[number, number]>([0, 100]);

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

        <Box display="flex" gap={4}>
          <Box
            sx={{
              width: "30%",
              backgroundColor: "#fff",
              p: 2,
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              height: "fit-content",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Filtros
            </Typography>

            <Typography variant="subtitle2">Preço</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" sx={{ width: 40 }}>
                R$ {precoRange[0]}
              </Typography>
              <Slider
                value={precoRange}
                onChange={(_, newValue) =>
                  setPrecoRange(newValue as [number, number])
                }
                valueLabelDisplay="auto"
                min={0}
                max={1000}
                sx={{ mx: 2, flexGrow: 1, color: "#009E60" }}
              />
              <Typography variant="body2" sx={{ width: 40 }}>
                R$ {precoRange[1]}
              </Typography>
            </Box>

            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Categoria
            </Typography>
            {["Roupas", "Eletrônicos", "Beleza"].map((categoria) => (
              <Box key={categoria}>
                <label>
                  <input type="checkbox" /> {categoria}
                </label>
              </Box>
            ))}

            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Material
            </Typography>
            {["Algodão", "Metal", "Plástico"].map((material) => (
              <Box key={material}>
                <label>
                  <input type="checkbox" /> {material}
                </label>
              </Box>
            ))}

            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Departamento
            </Typography>
            {["Masculino", "Feminino", "Infantil"].map((dep) => (
              <Box key={dep}>
                <label>
                  <input type="checkbox" /> {dep}
                </label>
              </Box>
            ))}
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
                <CardMedia>
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    height="140"
                    width="100%"
                    style={{
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = ImagemIndisponivel;
                    }}
                  />
                </CardMedia>

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
        </Box>
      </Container>
    </>
  );
}
