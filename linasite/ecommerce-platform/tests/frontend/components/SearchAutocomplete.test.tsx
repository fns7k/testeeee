import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchAutocomplete from '../../../frontend/src/components/SearchAutocomplete';

describe('SearchAutocomplete Component', () => {
    test('renders input field', () => {
        render(<SearchAutocomplete />);
        const inputElement = screen.getByPlaceholderText(/search products/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('displays suggestions when typing', () => {
        render(<SearchAutocomplete />);
        const inputElement = screen.getByPlaceholderText(/search products/i);
        fireEvent.change(inputElement, { target: { value: 'test' } });
        
        const suggestionElement = screen.getByText(/test suggestion/i); // Adjust based on your mock data
        expect(suggestionElement).toBeInTheDocument();
    });

    test('calls the search function on input change', () => {
        const mockSearchFunction = jest.fn();
        render(<SearchAutocomplete onSearch={mockSearchFunction} />);
        const inputElement = screen.getByPlaceholderText(/search products/i);
        fireEvent.change(inputElement, { target: { value: 'test' } });
        
        expect(mockSearchFunction).toHaveBeenCalledWith('test');
    });
});