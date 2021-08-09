import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: []
  },
  reducers: {
    addProduct: (state, action) => {
      const { name, qty, price } = action.payload;
      let found = false;
      for (let i = 0; i < state.cartList.length; i++) {
        if (state.cartList[i].name === name) {
          state.cartList[i].qty += qty;
          found = true;
          break;
        }
      }
      if (!found) {
        state.cartList.push({ name, qty, price });
      }
    },
    addQty: (state, action) => {
      const { name, qty } = action.payload;
      const itemIndex = state.cartList.findIndex((o) => o.name === name);
      state.cartList[itemIndex].qty += qty;
    },
    reduceQty: (state, action) => {
      const { name, qty } = action.payload;
      const itemIndex = state.cartList.findIndex((o) => o.name === name);
      state.cartList[itemIndex].qty -= qty;
      if (state.cartList[itemIndex].qty <= 0) {
        state.cartList.splice(itemIndex, 1);
      }
    }
  }
});
export const { addProduct, addQty, reduceQty } = cartSlice.actions;
export default cartSlice.reducer;
