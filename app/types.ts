export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
