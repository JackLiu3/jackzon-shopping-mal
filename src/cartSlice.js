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
    }
  }
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
