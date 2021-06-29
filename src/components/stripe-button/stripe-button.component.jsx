import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51I0gAOCtZqYd13Ac2yidlvw0KLZ4sxK6SSmBnQ9Lk908YBly8EgYodvVyYtUYVe3xoaNGWz9ZWqCUS80Me6CdKH2001XRbA0lJ";

    const onToken = token => {
        console.log(token);
        alert("Payment Successfull")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
