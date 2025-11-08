export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: 'customer' | 'admin';
}

export interface Order {
    id: string;
    userId: string;
    products: OrderProduct[];
    totalAmount: number;
    createdAt: Date;
    status: 'pending' | 'completed' | 'canceled';
}

export interface OrderProduct {
    productId: string;
    quantity: number;
}

export interface Review {
    id: string;
    productId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
    photos?: string[];
}