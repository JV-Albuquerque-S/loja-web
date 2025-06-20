export interface ProdutosAll {
  id: number | string;
  nome: string;
  preco: number;
  imagem: string;
  descricao?: string;
  hasDiscount?: boolean;
  discountValue?: number;
  detalhes?: {
    adjective?: string;
    material?: string;
  };
  galeria?: string[];
  origem: "brasil" | "europa";
}
