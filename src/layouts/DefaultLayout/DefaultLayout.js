import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductViewModal from "../../components/ProductViewModal";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <div className="container">
          <div className="main">{children}</div>
        </div>
        <Footer />
        <ProductViewModal />
      </div>
    </div>
  );
};

export default DefaultLayout;
