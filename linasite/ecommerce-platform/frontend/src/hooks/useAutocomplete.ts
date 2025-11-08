import { useState, useEffect } from 'react';

const useAutocomplete = (fetchSuggestions) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (inputValue) {
            const fetchData = async () => {
                const results = await fetchSuggestions(inputValue);
                setSuggestions(results);
            };
            fetchData();
        } else {
            setSuggestions([]);
        }
    }, [inputValue, fetchSuggestions]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const clearSuggestions = () => {
        setSuggestions([]);
    };

    return {
        inputValue,
        suggestions,
        handleInputChange,
        clearSuggestions,
    };
};

export default useAutocomplete;