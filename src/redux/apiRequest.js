import productApi from "../api/productApi";
import cateApi from "../api/cateApi";
import axios from "axios";
import userApi from "../api/userApi";

import {
  //get all
  getProductError,
  getProductStart,
  getProductSuccess,
  //get detail
  getDetailProductSuccess,
  //get by cate
  getProductByCateStart,
  getProductByCateError,
  getProductByCateSuccess,
  //add
  addProductStart,
  addProductError,
  addProductSuccess,
  // Delete
  deleteProductStart,
  deleteProductError,
  deleteProductSuccess,
  //update
  updateStart,
  updateError,
  updateSuccess,
} from "./product/productSlice";
import {
  resetUser,resetUserFailed,resetUserSuccess,updateStart1,updateError1, updateSuccessUser,deleteUserFailed,deleteUserStart,deleteUserSuccess,  addSuccess, addStart , addFailed,  getUserdetail, getUserStart, getUserSuccess, getUserFailed,getAllUserFail , getAllUserFetching,getAllUserSuccess 
} from "./user/userSlice";
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
// get all user
export const getAlluser = () => async (dispatch) => {
  dispatch(getAllUserFetching());
  try {
    const res = await userApi.getAll();
    console.log(res);
      dispatch(getAllUserSuccess(res));
  }
  catch(err){
    console.log(err);
    dispatch(getAllUserFail());
  }
};
//get user detail
export const getUserdetailEdit = async (dispatch, slug) => {
  dispatch(getUserStart());
  try {
    const res = await userApi.getDetail(slug);
    dispatch(getUserdetail(res));
  } catch (err) {
    dispatch(getUserFailed());
  }
};

export const addUser = async (userRegister, dispatch) => {
  dispatch(addStart());
  try {
    const res = await axios.post(
      "https://apieshopbasic.herokuapp.com/User",
      userRegister
    );
    dispatch(addSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(addFailed());
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

export const addNewProduct = async (history, dispatch, newProduct) => {
  dispatch(addProductStart());
  try {
    const formData = new FormData();

    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("shortDes", newProduct.shortDes);
    formData.append("shortDetails", "xin chao");
    formData.append("file", newProduct.file);
    formData.append("quantity", 100);
    formData.append("discount", 10);
    formData.append("view", 1);
    formData.append("categoryName", newProduct.categoryName);
    formData.append("size", ["s", "m"]);

    const res = await axios.post(
      "https://apieshopbasic.herokuapp.com/Product",
      formData
    );
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(addProductError());
  }
};

// Delete
export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    let _id = JSON.stringify(id);
    axios({
      method: "DELETE",
      url: "https://apieshopbasic.herokuapp.com/Product",
      data: _id,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      dispatch(deleteProductSuccess(id));
    });
  } catch (err) {
    console.log(err);
    dispatch(deleteProductError());
  }
};
export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStart());
  try {
    let _id = JSON.stringify(id);
    axios({
      method: "DELETE",
      url: "https://apieshopbasic.herokuapp.com/User",
      data: _id,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      dispatch(deleteUserSuccess(id));
    });
  } catch (err) {
    console.log(err);
    dispatch(deleteUserFailed());
  }
};
export const updateUser = async (dispatch, newProduct) => {
  dispatch(updateStart1());
  try {
    const res = await axios.put(
      "https://apieshopbasic.herokuapp.com/User",
      newProduct
    );
    console.log(res.data);
    dispatch(updateSuccessUser(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateError1());
  }
};
export const resetPW = async (dispatch, id) => {
  dispatch(resetUser());
  try {
    let _id = JSON.stringify(id);
    axios({
      method: "POST",
      url: "https://apieshopbasic.herokuapp.com/ResetPass",
      data: _id,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      dispatch(resetUserSuccess(id));
    });
  } catch (err) {
    console.log(err);
    dispatch(resetUserFailed());
  }
};
//update

export const updateProduct = async (dispatch, newProduct) => {
  dispatch(updateStart());
  try {
    const formData = new FormData();

    formData.append("id", newProduct.id);
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("shortDes", newProduct.shortDes);
    formData.append("shortDetails", "xin chao");
    formData.append("file", newProduct.file);
    formData.append("quantity", 100);
    formData.append("discount", 10);
    formData.append("view", 1);
    formData.append("categoryName", newProduct.categoryName);
    formData.append("size", ["s", "m"]);

    const res = await axios.put(
      "https://apieshopbasic.herokuapp.com/Product",
      formData
    );
    console.log(res.data);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateError());
  }
};

// axios({
//   method: "PUT",
//   url: "https://apieshopbasic.herokuapp.com/Product",
//   data: formData,
//   headers: { "Content-Type": "multipart/form-data" },
// }).then((res) => {
//   console.log(res.data);
//   // dispatch(addProductSuccess(res.data));
//   // navigate("/");
// });
