import React, { useState } from 'react';
import AddressForm from './AddressForm';

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [orderSummary, setOrderSummary] = useState({ items: [], total: 0 });

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle checkout submission logic here
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <AddressForm />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="creditCard"
                            checked={paymentMethod === 'creditCard'}
                            onChange={handlePaymentChange}
                        />
                        Credit Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="paypal"
                            checked={paymentMethod === 'paypal'}
                            onChange={handlePaymentChange}
                        />
                        PayPal
                    </label>
                </div>
                <button type="submit">Complete Purchase</button>
            </form>
            <div className="order-summary">
                <h2>Order Summary</h2>
                {/* Render order summary details here */}
            </div>
        </div>
    );
};

export default CheckoutPage;