import productApi from "../api/productApi";
import cateApi from "../api/cateApi";
import axios from "axios";

import {
  getProductError,
  getProductStart,
  getProductSuccess,
  getDetailProductSuccess,
  getProductByCateStart,
  getProductByCateError,
  getProductByCateSuccess,
} from "./product/productSlice";

import {
  loginStart,
  loginSucess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutSucess,
  logoutFailed,
} from "./auth/authSlice";
import {
  getCategoryStart,
  getCategorySuccess,
  getCategoryError,
} from "./category/categorySlice";

import { getUserStart, getUserSuccess, getUserFailed } from "./user/userSlice";

// get all product
export const getAllProduct = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await productApi.getAll();
    dispatch(getProductSuccess(res));
  } catch (err) {
    dispatch(getProductError());
  }
};

export const getDetailProduct = async (dispatch, slug) => {
  dispatch(getProductStart());
  try {
    const res = await productApi.getDetail(slug);
    dispatch(getDetailProductSuccess(res));
  } catch (err) {
    dispatch(getProductError());
  }
};

// login

export const loginUser = async (user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://apieshopbasic.herokuapp.com/auth/signin",
      user
    );
    dispatch(loginSucess(res.data));
    history.push("/");
  } catch (err) {
    console.log(err);
    dispatch(loginFailed());
  }
};

export const registerUser = async (userRegister, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      "https://apieshopbasic.herokuapp.com/auth/signup",
      userRegister
    );
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(registerFailed());
  }
};
//get user when after login

export const getUser = async (token, dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get(
      "https://apieshopbasic.herokuapp.com/User/Profile",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getUserFailed());
  }
};

export const logOut = async (dispatch, history) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSucess());
    history.push("/login");
  } catch (err) {
    console.log(err);
    dispatch(logoutFailed());
  }
};

export const getAllCate = async (dispatch) => {
  dispatch(getCategoryStart());
  try {
    const res = await cateApi.getAll();
    dispatch(getCategorySuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getCategoryError());
  }
};

export const getProductByCate = async (slug, dispatch) => {
  dispatch(getProductByCateStart());
  try {
    const res = await productApi.getProductByCate(slug);
    dispatch(getProductByCateSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getProductByCateError(err));
  }
};
