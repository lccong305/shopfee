import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,

  logout: {
    isFetching: false,
    error: false,
    success: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },

    loginSucess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },

    loginFailed: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    registerStart: (state) => {
      state.isFetching = true;
    },

    registerSuccess: (state, action) => {
      state.isFetching = false;
      //   state.currentUser = action.payload;
    },

    registerFailed: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    logoutStart: (state) => {
      state.logout.isFetching = true;
      state.logout.success = false;
    },

    logoutSucess: (state, action) => {
      state.logout.isFetching = true;
      state.currentUser = null;
      state.logout.success = true;
    },

    logoutFailed: (state, action) => {
      state.logout.isFetching = false;
      state.logout.error = true;
    },
  },
});

export const {
  loginStart,
  loginSucess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutSucess,
  logoutFailed,
} = authSlice.actions;
export default authSlice.reducer;
