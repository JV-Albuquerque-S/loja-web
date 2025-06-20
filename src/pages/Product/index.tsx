import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
  Chip,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ImagemIndisponivel from "../../assets/imagem_indisponivel.jpg";
import { Header } from "../../components/Header";
import type { ProdutoRandom } from "../../interfaces/produto-random.interface";
import { getProdutoRandom } from "../../services/produtos-todos.service";

export function Product() {
  const { id, origem } = useParams();
  const [produto, setProduto] = useState<ProdutoRandom>();

  console.log(id, origem);

  useEffect(() => {
    const fetchProduto = async () => {
      if (!id || !origem) return;
      try {
        const data = await getProdutoRandom(id, origem);
        setProduto(data);
      } catch (err) {
        console.error("Erro ao buscar produto:", err);
      }
    };

    fetchProduto();
  }, [id, origem]);

  if (!produto) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h6">Carregando produto...</Typography>
      </Container>
    );
  }

  const precoBase = produto.preco ?? produto.price ?? 0;

  const precoFinal =
    (produto.hasDiscount || produto.temDesconto) &&
    (produto.discountValue ?? produto.desconto)
      ? precoBase * (produto.discountValue ?? produto.desconto)!
      : precoBase;

  const imagemProduto =
    produto.imagem || produto.gallery?.[0] || ImagemIndisponivel;

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: "120px", mb: 4 }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardMedia
            component="img"
            image={imagemProduto}
            alt={produto.nome || produto.name}
            sx={{
              width: { xs: "100%", md: "50%" },
              objectFit: "cover",
              height: "100%",
              maxHeight: 500,
            }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = ImagemIndisponivel;
            }}
          />

          <Box p={4} display="flex" flexDirection="column" flex={1}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {produto.nome || produto.name}
            </Typography>

            <Box display="flex" alignItems="center" gap={1} mb={2}>
              {produto.hasDiscount && produto.discountValue ? (
                <Chip
                  label={`-${Math.round((1 - produto.discountValue) * 100)}%`}
                  color="success"
                  sx={{ fontWeight: "bold" }}
                />
              ) : (
                ""
              )}
              <Typography variant="h5" color="#009E60">
                R$ {Number(precoFinal).toFixed(2)}
              </Typography>
              {produto.hasDiscount && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  R$ {Number(produto.preco || produto.price).toFixed(2)}
                </Typography>
              )}
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Typography variant="subtitle1" color="text.secondary" mb={3}>
              {produto.descricao || "Sem descrição disponível."}
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              sx={{
                backgroundColor: "#009E60",
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: "#007A4A",
                },
                mt: "auto",
              }}
            >
              Adicionar ao carrinho
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}
