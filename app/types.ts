export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
}

export interface CartItem {
  productId: number;
  quantity: number;
}
