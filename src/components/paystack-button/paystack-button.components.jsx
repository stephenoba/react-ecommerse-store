import React from "react";

import { usePaystackPayment } from "react-paystack";

import './paystack-button.styles.scss';

const PaystackCheckoutButton = ({ price, userEmail }) => {
    const checkoutPrice = price * 100

    const config = {
        reference: (new Date()).getTime().toString(),
        email: userEmail,
        amount: checkoutPrice,
        publicKey: 'pk_test_98d6c664d8b97bd3bb0eb03d6c08bccf43112d7b',
    };

    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        alert("Payment Successful")
    };

    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    };

    const initializePayment = usePaystackPayment(config);
    
    return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Pay Now</button>
        </div>
    );
}

export default PaystackCheckoutButton;