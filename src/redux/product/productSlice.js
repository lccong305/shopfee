import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: [],
  pending: false,
  error: false,
};

export const productSlice = createSlice({
  name: "productModal",

  initialState,
  reducers: {
    getProductStart: (state) => {
      state.pending = true;
    },
    getProductError: (state) => {
      state.pending = false;
      state.error = true;
    },
    getProductSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.products = action.payload;
    },

    getDetailProductSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProductStart,
  getProductError,
  getProductSuccess,
  getDetailProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;
