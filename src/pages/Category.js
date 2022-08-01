import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import InfinityList from "../components/InfinityList";

import { getProductByCate } from "../redux/apiRequest";

const Category = () => {
  const dispatch = useDispatch();
  const slug = useParams();

  const products = useSelector((state) => state.products.productByCate);
  console.log(products);

  useEffect(() => {
    getProductByCate(slug.cate, dispatch);
  }, []);
  return (
    <div>
      <div className="catalog__content">
        <InfinityList data={products} />
      </div>
    </div>
  );
};

export default Category;
