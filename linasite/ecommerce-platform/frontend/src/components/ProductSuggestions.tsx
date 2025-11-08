import React, { useEffect, useState } from 'react';
import { fetchProductSuggestions } from '../services/api';

const ProductSuggestions: React.FC = () => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getSuggestions = async () => {
            try {
                const data = await fetchProductSuggestions();
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching product suggestions:', error);
            } finally {
                setLoading(false);
            }
        };

        getSuggestions();
    }, []);

    if (loading) {
        return <div>Loading suggestions...</div>;
    }

    return (
        <div>
            <h3>Product Suggestions</h3>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductSuggestions;