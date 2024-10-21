// src/pages/Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  const handleQuantityChange = (item, quantity) => {
    if (quantity < 1) return; // Prevent quantity from being less than 1
    dispatch(updateItemQuantity({ id: item.id, quantity })); // Update the quantity in the cart
  };

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img 
                    src={item.images[0]} // Display the first image
                    alt={item.title}
                    style={{ width: '50px', height: '50px', marginRight: '10px' }}
                  />
                  <span>{item.title} - </span>
                  <input 
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                    style={{ width: '60px', marginLeft: '10px', marginRight: '10px' }}
                  />
                  <span>x ${item.price}</span>
                </div>
                <button 
                  className="btn btn-danger" 
                  onClick={() => dispatch(removeItemFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h5>Total Quantity: {totalQuantity}</h5>
            <h5>Total Price: ${totalPrice.toFixed(2)}</h5> {/* Optional: Format price */}
            <Link to="/checkout" className="btn btn-success">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
