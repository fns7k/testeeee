import { Router } from 'express';
import { searchProducts } from '../controllers/searchController';

const router = Router();

// Route for searching products
router.get('/search', searchProducts);

export default router;