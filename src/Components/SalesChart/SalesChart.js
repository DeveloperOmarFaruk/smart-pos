import React from "react";
import "./SalesChart.css";
import Chart from "react-apexcharts";
import ApexChart from "./ApexChart";

const SalesChart = () => {
  return (
    <>
      <div className="sales-chart-section">
        <h3>Daily sales</h3>
        <div className="sales-chart">
          <ApexChart />
        </div>
      </div>
    </>
  );
};

export default SalesChart;
