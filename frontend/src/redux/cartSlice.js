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
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); // Add new item with quantity 1
      }
      state.totalQuantity += 1; // Increment total quantity
      state.totalPrice += item.price; // Increment total price
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity; // Decrement total quantity
        state.totalPrice -= existingItem.price * existingItem.quantity; // Decrement total price
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== id); // Remove item from cart
      }
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        const prevQuantity = existingItem.quantity; // Store previous quantity for calculation
        existingItem.quantity = quantity; // Update the quantity

        // Update total quantity and total price
        state.totalQuantity += (quantity - prevQuantity); // Update total quantity correctly
        state.totalPrice += (quantity - prevQuantity) * existingItem.price; // Update total price correctly
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0; // Reset total price when cart is cleared
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;