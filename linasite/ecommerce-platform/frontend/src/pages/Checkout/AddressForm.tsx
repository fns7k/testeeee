import React, { useState } from 'react';

const AddressForm = () => {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Address submitted:', address);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="street">Street Address</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    value={address.street}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="state">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="zip">Zip Code</label>
                <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={address.zip}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={address.country}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Continue to Payment</button>
        </form>
    );
};

export default AddressForm;