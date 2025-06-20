import axios from "axios";
import type { ProdutoEuropa } from "../interfaces/produtos-eu.interface";

export async function getProdutosEuropa(): Promise<ProdutoEuropa[]> {
  const { data } = await axios.get<ProdutoEuropa[]>(
    "http://localhost:3000/produtos-europa",
  );
  return data;
}
