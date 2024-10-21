import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
        state.totalPrice += item.price; // Increment total price by the price of the item added
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); // Add new item with quantity 1
        state.totalPrice += item.price; // Increment total price for the new item
      }
      state.totalQuantity += 1; // Increment total quantity by 1
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          // If quantity is more than 1, just decrement the quantity
          existingItem.quantity -= 1; 
          state.totalPrice -= existingItem.price; // Decrement total price by the price of the item removed
          state.totalQuantity -= 1; // Decrement total quantity by 1
        } else {
          // If quantity is 1, remove the item entirely
          state.totalQuantity -= 1; // Decrement total quantity
          state.totalPrice -= existingItem.price; // Decrement total price
          state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== id); // Remove item from cart
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = []; // Clear cart items
      state.totalQuantity = 0; // Reset quantity
      state.totalPrice = 0; // Reset total price
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
