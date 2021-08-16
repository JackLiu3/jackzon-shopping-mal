import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: []
  },
  reducers: {
    additProduct: (state, action) => {
      const { name, price } = action.payload;
      const product = state.productList.find((item) => item.name === name);
      if (!product) {
        state.productList.push({ name, price });
      } else {
        product.price = price;
      }
    },
    deleteProduct: (state, action) => {
      const { name } = action.payload;
      const itemIndex = state.productList.findIndex((o) => o.name === name);
      state.productList.splice(itemIndex, 1);
    }
  }
});
export const { additProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
