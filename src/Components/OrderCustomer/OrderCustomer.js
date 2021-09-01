import React from "react";
import "./OrderCustomer.css";

const OrderCustomer = () => {
  return (
    <>
      <div className="order-customer-section">
        <div className="order-customer-order">
          <div className="order-customer-order-name-details">
            <i class="far fa-calendar-check"></i>

            <h4>Total Orders</h4>
            <p className="percent">-2.33%</p>
          </div>

          <h3>21,375</h3>
        </div>

        <div className="order-customer-customer">
          <div className="order-customer-customer-name-details">
            <i class="fas fa-user-plus"></i>

            <h4>New Customers</h4>
            <p className="percent">+32.40%</p>
          </div>

          <h3>256</h3>
        </div>
      </div>
    </>
  );
};

export default OrderCustomer;
