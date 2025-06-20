import axios from "axios";
import type { ProdutoBrasil } from "../interfaces/produtos-br.interface";

export async function getProdutosBrasil(): Promise<ProdutoBrasil[]> {
  const { data } = await axios.get<ProdutoBrasil[]>(
    "http://localhost:3000/produtos-brasil",
  );
  return data;
}
