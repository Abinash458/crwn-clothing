import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <CheckoutItemContainer className="checkout-item">
            <ImageContainer className="image-container">
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer className="name">{name}</TextContainer>
            <QuantityContainer className="quantity">
                <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
            </QuantityContainer>
            <TextContainer className="price">${price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)} className="remove-button">&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
