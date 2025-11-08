import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    timeout: 10000,
});

// Products
export const fetchProducts = async () => {
    const response = await api.get('/products');
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};

// Checkout
export const createOrder = async (orderData) => {
    const response = await api.post('/checkout', orderData);
    return response.data;
};

// Reviews
export const fetchReviewsByProductId = async (productId) => {
    const response = await api.get(`/reviews?productId=${productId}`);
    return response.data;
};

export const submitReview = async (reviewData) => {
    const response = await api.post('/reviews', reviewData);
    return response.data;
};

// Admin
export const uploadCsv = async (formData) => {
    const response = await api.post('/admin/upload-csv', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const fetchOrders = async () => {
    const response = await api.get('/admin/orders');
    return response.data;
};