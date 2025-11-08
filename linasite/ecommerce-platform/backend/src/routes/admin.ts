import { Router } from 'express';
import { 
    getProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    uploadCsv, 
    getOrders 
} from '../controllers/adminController';

const router = Router();

// Route to get all products
router.get('/products', getProducts);

// Route to create a new product
router.post('/products', createProduct);

// Route to update an existing product
router.put('/products/:id', updateProduct);

// Route to delete a product
router.delete('/products/:id', deleteProduct);

// Route to upload CSV file
router.post('/upload-csv', uploadCsv);

// Route to get all orders
router.get('/orders', getOrders);

export default router;