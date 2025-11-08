import { Request, Response } from 'express';
import { Order } from '../models/order.model';
import { PaymentService } from '../services/paymentService';

export class CheckoutController {
    public async processCheckout(req: Request, res: Response): Promise<void> {
        try {
            const { address, paymentMethod, cartItems } = req.body;

            // Validate the request data
            if (!address || !paymentMethod || !cartItems) {
                res.status(400).json({ message: 'Address, payment method, and cart items are required.' });
                return;
            }

            // Process payment
            const paymentResult = await PaymentService.processPayment(paymentMethod, cartItems);
            if (!paymentResult.success) {
                res.status(500).json({ message: 'Payment processing failed.' });
                return;
            }

            // Create an order
            const order = new Order({
                address,
                paymentMethod,
                items: cartItems,
                totalAmount: paymentResult.amount,
                status: 'Pending',
            });

            await order.save();

            res.status(201).json({ message: 'Checkout successful', order });
        } catch (error) {
            res.status(500).json({ message: 'An error occurred during checkout', error });
        }
    }
}