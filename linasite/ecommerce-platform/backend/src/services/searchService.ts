import { Product } from '../models/product.model';
import { Request, Response } from 'express';

export const searchProducts = async (req: Request, res: Response) => {
    const { query } = req.query;

    try {
        const products = await Product.find({
            $text: { $search: query }
        }).limit(10); // Limit results for autocomplete

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error searching products', error });
    }
};

export const getProductSuggestions = async (req: Request, res: Response) => {
    const { category } = req.query;

    try {
        const suggestions = await Product.find({ category })
            .limit(5); // Limit suggestions

        res.json(suggestions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product suggestions', error });
    }
};