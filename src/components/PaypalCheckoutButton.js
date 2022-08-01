import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
  const { product } = props;

  const handleApprove = (orderId) => {
    alert("paid true");
  };
  return (
    <PayPalButtons
      style={{ height: 35, layout: "horizontal" }}
      // createOrder={(data, actions) => {
      //   return actions.order.create({
      //     purchase_units: [
      //       {
      //         description: "Pay the bill",
      //         amount: {
      //           value: product.subTotalPrice,
      //         },
      //       },
      //     ],
      //   });
      // }}
      // onApprove={async (data, actions) => {
      //   const order = await actions.order.capture;
      //   console.log(order);
      //   handleApprove(data.orderID);
      // }}
    />
  );
};

export default PaypalCheckoutButton;
