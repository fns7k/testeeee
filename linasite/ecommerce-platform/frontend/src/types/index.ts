export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'admin';
};

export type Order = {
  id: string;
  userId: string;
  products: Product[];
  totalAmount: number;
  shippingAddress: string;
  status: 'pending' | 'completed' | 'canceled';
};

export type Review = {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  photos?: string[];
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};