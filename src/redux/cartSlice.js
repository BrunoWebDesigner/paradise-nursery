// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    totalQuantity: 0,
    totalCost: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 };
        state.totalQuantity += 1;
        state.totalCost += plant.price;
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalQuantity += 1;
      state.totalCost += state.items[id].price;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
        state.totalCost -= state.items[id].price;
      } else {
        delete state.items[id];
        state.totalQuantity -= 1;
        state.totalCost -= state.items[id].price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const removed = state.items[id];
      state.totalQuantity -= removed.quantity;
      state.totalCost -= removed.quantity * removed.price;
      delete state.items[id];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
