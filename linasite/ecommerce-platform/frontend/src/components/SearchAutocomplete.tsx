import React, { useState, useEffect } from 'react';
import { useAutocomplete } from '../hooks/useAutocomplete';

const SearchAutocomplete = () => {
    const [inputValue, setInputValue] = useState('');
    const { suggestions, fetchSuggestions } = useAutocomplete(inputValue);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        // Optionally, navigate to the product page or perform another action
    };

    useEffect(() => {
        if (inputValue) {
            fetchSuggestions(inputValue);
        }
    }, [inputValue, fetchSuggestions]);

    return (
        <div className="search-autocomplete">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search for products..."
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchAutocomplete;