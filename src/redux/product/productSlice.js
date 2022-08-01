import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: [], //detail
  productByCate: [],
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

    getProductByCateStart: (state) => {
      state.pending = true;
    },
    getProductByCateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    getProductByCateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.productByCate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProductStart,
  getProductError,
  getProductSuccess,
  getDetailProductSuccess,
  getProductByCateStart,
  getProductByCateError,
  getProductByCateSuccess,
} = productSlice.actions;

export default productSlice.reducer;
