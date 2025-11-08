import { Request, Response } from 'express';
import { searchProducts } from '../services/searchService';

export const searchController = {
    search: async (req: Request, res: Response) => {
        const query = req.query.q as string;

        try {
            const results = await searchProducts(query);
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ message: 'Error searching products', error });
        }
    }
};