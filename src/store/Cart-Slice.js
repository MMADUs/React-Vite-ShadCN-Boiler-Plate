import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemExist = state.value.find(
        (item) => item._id === action.payload._id
      );

      if (isItemExist) {
        isItemExist.quantity++;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
        console.log("new item added");
      }

      console.log("added to cart", action.payload);
    }
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
