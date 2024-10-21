import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItemFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

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
                {item.name} - {item.quantity} x ${item.price}
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
            <h5>Total Price: ${totalPrice}</h5>
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
