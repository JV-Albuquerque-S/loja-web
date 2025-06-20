export interface ProdutoEuropa {
  id: string;
  name: string;
  price: number;
  gallery: string[];
  hasDiscount: boolean;
  discountValue: number;
  description: string;
  details: {
    adjective: string;
    material: string;
  };
}
