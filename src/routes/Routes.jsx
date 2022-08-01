import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Payment from "../pages/Payment";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import Category from "../pages/Category";

import ProductAD from "../admin/Product";
import CategoryAD from "../admin/Category";
import AdminLayout from "../layouts/AdminLayout";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/category/:cate" component={Category} />
      <ProtectedRoute exact path="/payment" component={Payment} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* <Route path="/payment" component={Payment} /> */}
      <ProtectedRoute exact path="/admin" component={AdminLayout} />
      <ProtectedRoute exact path="/admin-product" component={ProductAD} />
      <ProtectedRoute exact path="/admin-category" component={CategoryAD} />
    </Switch>
  );
};

export default Routes;
