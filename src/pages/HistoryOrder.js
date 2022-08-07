import React from "react";
import { useSelector } from "react-redux";

const HistoryOrder = () => {
  const orders = useSelector((state) => state.payment?.dataOrder);
  const user = useSelector((state) => state.user?.currentUser);
  console.log(user.id);
  const userIdOrder = orders.find((order) => order.customerId === user.id);
  console.log("userIdOrder ", userIdOrder);

  return (
    <div className="history-order">
      <table class="styled-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {userIdOrder?.productorder.map((item, idx) => (
            <tr key={item.idx}>
              <td>
                <img
                  style={{ width: "80px", height: "80px" }}
                  src={item.image}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.size}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryOrder;
