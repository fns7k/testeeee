import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    rating: number;
    onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageUrl, price, rating, onAddToCart }) => {
    return (
        <div className="product-card">
            <Link to={`/products/${id}`}>
                <img src={imageUrl} alt={title} className="product-image" />
                <h3 className="product-title">{title}</h3>
                <p className="product-price">${price.toFixed(2)}</p>
                <div className="product-rating">
                    {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
                </div>
            </Link>
            <button onClick={() => onAddToCart(id)} className="add-to-cart-button">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;