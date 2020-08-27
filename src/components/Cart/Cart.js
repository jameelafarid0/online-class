import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const subject = cart[i];
        total = total + subject.price;
    }

    return (
        <div className="style-cart">
            
            <h1>Cart Review  </h1>
            <h3><FontAwesomeIcon icon={faBook} className="icon" /> {cart.length}</h3>
            
            
            <h2>Courses Purchased : {cart.length}</h2>
            <h2>Total Price: ${total}</h2>
        </div>
    );
};

export default Cart;