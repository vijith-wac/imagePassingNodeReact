// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !address) {
      alert("Please fill in both fields.");
      return;
    }

    // Process the order (e.g., send to API)
    console.log("Order Details:");
    console.log(`Name: ${name}, Address: ${address}`);
    
    // Clear the cart after purchase
    dispatch(clearCart());
    
    // Redirect to confirmation or homepage, etc.
    alert("Thank you for your purchase!");
    // Here you can use a redirect or navigate to another page
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to the cart first.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <h5>Total Price: ${totalPrice}</h5>
          <button type="submit" className="btn btn-primary">Confirm Purchase</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
