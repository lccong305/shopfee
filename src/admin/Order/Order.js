import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrder,
  getOrderDetail,
  updatePendingOrder,
} from "../../redux/apiRequest";

import { GrView } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { SiOpenaccess } from "react-icons/si";
import { TbNotesOff, TbNotes } from "react-icons/tb";

import "./style.scss";
import OrderDetail from "./OrderDetail";

const Order = () => {
  const dispatch = useDispatch();
  const [showDetailOrder, setShowDetailOrder] = useState(false);

  const order = useSelector((state) => state.payment.dataOrder);
  const orderDetail = useSelector((state) => state.payment.dataOrderDetail);
  const orderDetailLoading = useSelector(
    (state) => state.payment.orderDetailFetching
  );
  // const loading = useSelector((state) => state.products.pending);
  // const product = useSelector((state) => state.products.product); //detail

  useEffect(() => {
    getAllOrder(dispatch);
  }, [dispatch]);

  const [columns, setColumns] = useState([]);
  const [pending, setPending] = React.useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
        {
          name: "createdDate",
          selector: (row) => row.createdDate,
          sortable: true,
        },
        {
          name: "updatedDate",
          selector: (row) => row.updatedDate,
          sortable: true,
        },
        {
          name: "customerPhone",
          selector: (row) => row.customerPhone,
          sortable: true,
        },
        {
          name: "customerName",
          selector: (row) => row.customerName,
          sortable: true,
        },

        {
          name: "customerAddress",
          selector: (row) => row.customerAddress,
          sortable: true,
        },
        {
          name: "Method Payment",
          selector: (row) => row.payment,
          sortable: true,
        },
        {
          name: "Pending",
          selector: (row) => (
            <div
              className="action-order-icon"
              onClick={() => handleUpdatePending(row.id)}
            >
              {row.status ? <TbNotes /> : <TbNotesOff />}
            </div>
          ),

          sortable: true,
        },

        {
          name: "Action",
          cell: (row) => (
            <div className="button-action-orders" style={{ fontSize: "10px" }}>
              <div
                className="action-order-icon"
                onClick={(e) => handleShowDetailOrder(e, row.id)}
              >
                <GrView />
              </div>
              <div className="action-order-icon">
                <AiFillDelete />
              </div>
            </div>
          ),
        },
      ]);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  const handleShowDetailOrder = (e, id) => {
    e.preventDefault();
    setShowDetailOrder(true);
    getOrderDetail(id, dispatch);
  };
  console.log("orderDetail: ", orderDetail);
  const handleUpdatePending = (id) => {
    updatePendingOrder(id, dispatch);
  };
  return (
    <AdminLayout>
      <button onClick={() => setShowDetailOrder(false)}>close</button>
      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="500PX"
        progressPending={pending}
        columns={columns}
        data={order}
        pagination
        subHeader
        persistTableHead
        subHeaderComponent={
          <div>
            <input
              type="text"
              className="cc-input form-control"
              placeholder="Search here"
            />
          </div>
        }
      />
      {showDetailOrder && (
        <OrderDetail
          showDetailOrder={showDetailOrder}
          setShowDetailOrder={setShowDetailOrder}
          orderDetail={orderDetail}
          orderDetailLoading={orderDetailLoading}
        />
      )}
    </AdminLayout>
  );
};

export default Order;
