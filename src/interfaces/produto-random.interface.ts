export interface ProdutoRandom {
  id: number;
  nome?: string;
  preco?: number;
  imagem?: string;
  descricao?: string;

  temDesconto?: boolean;
  desconto?: number;
  hasDiscount?: boolean;
  discountValue?: number;

  origem?: string;
  gallery?: string[];
  price?: number;
  name?: string;
}
