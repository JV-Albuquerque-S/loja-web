import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { Header } from "../../components/Header";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import ImagemIndisponivel from "../../assets/imagem_indisponivel.jpg";

type ProdutoCarrinho = {
  id: string | number;
  nome?: string;
  name?: string;
  preco?: number;
  price?: number;
  imagem?: string;
  gallery?: string[];
  quantidade?: number;
};

const carrinho: ProdutoCarrinho[] = [
  {
    id: "1",
    nome: "Camisa Social Masculina",
    preco: 127,
    imagem: "http://placeimg.com/640/480/business",
    quantidade: 1,
  },
  {
    id: "2",
    name: "Handcrafted Frozen Sausages",
    price: 723,
    gallery: ["http://placeimg.com/640/480/abstract"],
    quantidade: 2,
  },
];

export function CartPage() {
  const calcularTotal = () =>
    carrinho.reduce((total, item) => {
      const preco = item.preco ?? item.price ?? 0;
      return total + preco * (item.quantidade ?? 1);
    }, 0);

  return (
    <>
      <Header />
      <Container maxWidth={false} sx={{ mt: "100px", mb: 5, width: "100vw" }}>
        <Typography variant="h4" gutterBottom>
          Carrinho de Compras
        </Typography>

        {carrinho.length === 0 ? (
          <Typography variant="body1">Seu carrinho está vazio.</Typography>
        ) : (
          <Box display="flex" flexDirection="column" gap={3}>
            {carrinho.map((produto) => (
              <Card
                key={produto.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  borderRadius: "16px",
                  backgroundColor: "#EAF7F2",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <CardMedia>
                  <img
                    src={produto.imagem ?? produto.gallery?.[0]}
                    alt={produto.nome ?? produto.name}
                    width="120"
                    height="120"
                    style={{
                      objectFit: "cover",
                      borderRadius: 12,
                    }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = ImagemIndisponivel;
                    }}
                  />
                </CardMedia>

                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">
                    {produto.nome ?? produto.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Preço unitário: R${" "}
                    {(produto.preco ?? produto.price)?.toFixed(2)}
                  </Typography>
                  <Typography variant="body2">
                    Quantidade: {produto.quantidade ?? 1}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    Subtotal: R${" "}
                    {(
                      (produto.preco ?? produto.price ?? 0) *
                      (produto.quantidade ?? 1)
                    ).toFixed(2)}
                  </Typography>
                </CardContent>

                <Button
                  startIcon={<DeleteIcon />}
                  sx={{
                    backgroundColor: "#ff5252",
                    color: "#fff",
                    borderRadius: "12px",
                    height: "40px",
                    "&:hover": {
                      backgroundColor: "#e53935",
                    },
                  }}
                >
                  Remover
                </Button>
              </Card>
            ))}

            <Divider />

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">
                R$ {calcularTotal().toFixed(2)}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  backgroundColor: "#009E60",
                  "&:hover": { backgroundColor: "#007A4A" },
                  borderRadius: "12px",
                  paddingX: 4,
                  paddingY: 1,
                }}
              >
                Finalizar Compra
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}
