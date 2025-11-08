import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

const Home: React.FC = () => {
    const { products, loading, error } = useProducts();

    return (
        <div className="home">
            <h1>Welcome to Our E-Commerce Store</h1>
            {loading && <p>Loading products...</p>}
            {error && <p>Error loading products: {error.message}</p>}
            <div className="product-list">
                {products.map(product => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;