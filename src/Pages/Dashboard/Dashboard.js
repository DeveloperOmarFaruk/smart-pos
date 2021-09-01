import React from "react";
import Employees from "../../Components/Employees/Employees";
import IncomeChart from "../../Components/IncomeChart/IncomeChart";
import AfterNavbar from "../../Components/Navbar/AfterNavbar/AfterNavbar";
import TopNavbar from "../../Components/Navbar/TopNavbar/TopNavbar";
import OrderCustomer from "../../Components/OrderCustomer/OrderCustomer";
import SalesChart from "../../Components/SalesChart/SalesChart";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Trending from "../../Components/Trending/Trending";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-section">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="dashboard">
          <TopNavbar />
          <AfterNavbar />
          <div className="chart">
            <SalesChart />
            <IncomeChart />
            <OrderCustomer />
          </div>
          <div className="trending-employees">
            <Trending />
            <Employees />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
