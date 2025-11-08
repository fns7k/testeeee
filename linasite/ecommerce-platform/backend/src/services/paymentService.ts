import { PaymentIntent, Stripe } from 'stripe';
import { Request, Response } from 'express';
import { Order } from '../models/order.model';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
});

export const createPaymentIntent = async (req: Request, res: Response) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent: PaymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const confirmPayment = async (req: Request, res: Response) => {
  const { paymentIntentId, orderId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      await Order.updateOne({ _id: orderId }, { status: 'paid' });
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'Payment not successful' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};