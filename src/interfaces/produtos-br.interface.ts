export interface ProdutoBrasil {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao?: string;
  temDesconto?: boolean;
  desconto?: number;
  origem?: string;
}
