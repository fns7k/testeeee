import express from 'express';
import { checkoutController } from '../controllers/checkoutController';

const router = express.Router();

router.post('/checkout', checkoutController.processCheckout);
router.get('/checkout/orders', checkoutController.getOrders);

export default router;