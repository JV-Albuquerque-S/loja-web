import axios from "axios";
import type { ProdutosAll } from "../interfaces/produtos-all.interface";
import type { ProdutoBrasil } from "../interfaces/produtos-br.interface";
import type { ProdutoEuropa } from "../interfaces/produtos-eu.interface";
import type { ProdutoRandom } from "../interfaces/produto-random.interface";

const baseURL = "http://localhost:3000";

export async function getProdutosTodos(): Promise<ProdutosAll[]> {
  const promises = [];

  promises.push(
    axios.get<ProdutoBrasil[]>(`${baseURL}/produtos-brasil`).then((res) =>
      res.data.map(
        (p): ProdutosAll => ({
          id: p.id,
          nome: p.nome,
          preco: p.preco,
          imagem: p.imagem,
          origem: "brasil",
        }),
      ),
    ),
  );

  promises.push(
    axios.get<ProdutoEuropa[]>(`${baseURL}/produtos-europa`).then((res) =>
      res.data.map(
        (p): ProdutosAll => ({
          id: p.id,
          nome: p.name,
          preco: p.price,
          imagem: p.gallery?.[0] || "",
          descricao: p.description,
          hasDiscount: p.hasDiscount,
          discountValue: p.discountValue,
          detalhes: {
            adjective: p.details?.adjective,
            material: p.details?.material,
          },
          galeria: p.gallery,
          origem: "europa",
        }),
      ),
    ),
  );

  const resultados = await Promise.all(promises);
  return resultados.flat();
}

export async function getProdutoRandom(
  id: string,
  origem: string,
): Promise<ProdutoRandom> {
  const { data } = await axios.get<ProdutoRandom>(
    origem === "brasil"
      ? `http://localhost:3000/produtos-brasil/${id}`
      : `http://localhost:3000/produtos-europa/${id}`,
  );
  return data;
}
