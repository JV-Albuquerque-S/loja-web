import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import type { ProdutoBrasil } from "../../interfaces/produtos-br.interface";
import type { ProdutoEuropa } from "../../interfaces/produtos-eu.interface";
import { getProdutosBrasil } from "../../services/produtos-brasil.service";
import { getProdutosEuropa } from "../../services/produtos-europa.service";
import { getProdutosTodos } from "../../services/produtos-todos.service";
import type { ProdutosAll } from "../../interfaces/produtos-all.interface";

export function Homepage() {
  const navigate = useNavigate();

  const [precoRange, setPrecoRange] = useState<[number, number]>([0, 1000]);
  const [origem, setOrigem] = useState<"brasil" | "europa" | "todos">("todos");
  const [produtosBR, setProdutosBR] = useState<ProdutoBrasil[]>([]);
  const [produtosEU, setProdutosEU] = useState<ProdutoEuropa[]>([]);
  const [produtosTodos, setProdutosTodos] = useState<ProdutosAll[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        if (origem === "brasil") {
          const dataBR = await getProdutosBrasil();
          setProdutosBR(dataBR);
        } else if (origem === "europa") {
          const dataEU = await getProdutosEuropa();
          setProdutosEU(dataEU);
        } else {
          const dataAll = await getProdutosTodos();
          setProdutosTodos(dataAll);
        }
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    };

    fetchProdutos();
  }, [origem]);

  console.log(produtosBR);
  console.log(produtosEU);
  console.log(produtosTodos);

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
              País
            </Typography>
            <Box mb={3}>
              <TextField
                select
                label="Origem"
                value={origem}
                onChange={(e) =>
                  setOrigem(e.target.value as "brasil" | "europa" | "todos")
                }
                SelectProps={{ native: true }}
                size="small"
                sx={{
                  mt: 1,
                  width: "100%",
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                }}
              >
                <option value="todos">Todos</option>
                <option value="brasil">Brasil</option>
                <option value="europa">Europa</option>
              </TextField>
            </Box>

            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Categoria
            </Typography>
            {[
              "Awesome",
              "Bespoke",
              "Ergonomic",
              "Elegant",
              "Electronic",
              "Fresh",
              "Fantastic",
              "Generic",
              "Gorgeous",
              "Handmade",
              "Handcrafted",
              "Intelligent",
              "Incredible",
              "Licensed",
              "Luxurious",
              "Moderm",
              "Oriental",
              "Practical",
              "Refined",
              "Recycled",
              "Rustic",
              "Roupas",
              "Small",
              "Sleek",
              "Tasty",
              "teste",
              "Unbranded",
            ].map((categoria) => (
              <Box key={categoria}>
                <label>
                  <input type="checkbox" /> {categoria}
                </label>
              </Box>
            ))}

            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Material
            </Typography>
            {[
              "Metal",
              "Granite",
              "Frozen",
              "Rubber",
              "Cotton",
              "Steel",
              "Soft",
              "Plastic",
              "Wooden",
              "Concrete",
              "Bronze",
              "Malha",
              "Fresh",
              "teste",
            ].map((material) => (
              <Box key={material}>
                <label>
                  <input type="checkbox" /> {material}
                </label>
              </Box>
            ))}

            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Departamento
            </Typography>
            {[
              "Vestuário",
              "Grocery",
              "Tools",
              "Outdoors",
              "Games",
              "Books",
              "Computers",
              "Music",
              "Garden",
              "Clothing",
              "Shoes",
              "Health",
              "Jewelery",
              "Baby",
              "Kids",
              "Sports",
              "Industrial",
              "Home",
              "Movies",
              "Beauty",
              "Electronics",
              "Toys",
              "teste",
            ].map((dep) => (
              <Box key={dep}>
                <label>
                  <input type="checkbox" /> {dep}
                </label>
              </Box>
            ))}
          </Box>

          <Box display="flex" flexWrap="wrap" gap={3}>
            {origem === "brasil"
              ? produtosBR.map((produto) => (
                  <Card
                    key={produto.id}
                    sx={{
                      width: "220px",
                      backgroundColor: "#EAF7F2",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                      borderRadius: "16px",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/produto/${produto.id}`)}
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
                        R$ {produto.preco}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/produto/${produto.id}+10`);
                        }}
                      >
                        Adicionar ao carrinho
                      </Button>
                    </CardActions>
                  </Card>
                ))
              : origem === "europa"
                ? produtosEU.map((produto) => (
                    <Card
                      key={produto.id}
                      sx={{
                        width: "220px",
                        backgroundColor: "#EAF7F2",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        borderRadius: "16px",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/produto/${produto.id}`)}
                    >
                      <CardMedia>
                        <img
                          src={produto.gallery[0]}
                          alt={produto.name}
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
                          {produto.name}
                        </Typography>
                        <Typography color="text.secondary">
                          R${" "}
                          {produto.hasDiscount
                            ? (produto.price * produto.discountValue).toFixed(2)
                            : produto.price}
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
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/produto/${produto.id}+10`);
                          }}
                        >
                          Adicionar ao carrinho
                        </Button>
                      </CardActions>
                    </Card>
                  ))
                : produtosTodos.map((produto) => (
                    <Card
                      key={produto.id}
                      sx={{
                        width: "220px",
                        backgroundColor: "#EAF7F2",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        borderRadius: "16px",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/produto/${produto.id}`)}
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
                          R${" "}
                          {produto.hasDiscount && produto.discountValue
                            ? (produto.preco * produto.discountValue).toFixed(2)
                            : produto.preco}
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
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/produto/${produto.id}+10`);
                          }}
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
