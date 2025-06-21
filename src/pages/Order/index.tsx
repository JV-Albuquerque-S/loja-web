import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Button,
  Divider,
  Container,
} from "@mui/material";
import { Header } from "../../components/Header";

const pedidosMock = [
  {
    id: 1,
    dataCompra: "2025-06-15",
    status: "Entregue",
    produtos: [
      {
        id: 101,
        nome: "Tênis Esportivo",
        preco: 299.9,
        imagem: "https://via.placeholder.com/100",
      },
      {
        id: 102,
        nome: "Camiseta Dry Fit",
        preco: 99.9,
        imagem: "https://via.placeholder.com/100",
      },
    ],
  },
  {
    id: 2,
    dataCompra: "2025-05-30",
    status: "Em transporte",
    produtos: [
      {
        id: 201,
        nome: "Fone Bluetooth",
        preco: 199.9,
        imagem: "https://via.placeholder.com/100",
      },
    ],
  },
];

export function Order() {
  return (
    <>
      <Header />
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Box maxWidth={800} width="100%">
          <Typography variant="h4" gutterBottom textAlign="center">
            Meus Pedidos
          </Typography>

          {pedidosMock.map((pedido) => (
            <Box key={pedido.id} mb={5}>
              <Typography variant="h6">
                Pedido em{" "}
                {new Date(pedido.dataCompra).toLocaleDateString("pt-BR")}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Status: {pedido.status}
              </Typography>

              <Stack spacing={2}>
                {pedido.produtos.map((produto) => (
                  <Card
                    key={produto.id}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <CardMedia
                      component="img"
                      image={produto.imagem}
                      alt={produto.nome}
                      sx={{ width: 100, height: 100, objectFit: "cover" }}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography variant="subtitle1">
                        {produto.nome}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                      </Typography>
                    </CardContent>
                    <Box pr={2}>
                      <Button variant="outlined" size="small">
                        Ver detalhes
                      </Button>
                    </Box>
                  </Card>
                ))}
              </Stack>

              <Divider sx={{ mt: 4 }} />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
