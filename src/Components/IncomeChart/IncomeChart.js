import React from "react";
import DonutChart from "./DonutChart";
import "./IncomeChart.css";
// import Chart from "react-apexcharts";

const IncomeChart = () => {
  // const options = {
  //   series: [40000, 25000, 12541],
  //   labels: ["Food", "Dink", "Others"],
  //   plotOptions: {
  //     pie: {
  //       expandOnClick: true,
  //       donut: {
  //         labels: {
  //           show: true,
  //           total: {
  //             show: true,
  //             showAlways: true,
  //             fontSize: "24px",
  //             color: "#ccc",
  //           },
  //         },
  //       },
  //     },
  //   },
  // };

  // const series = [45000, 20000, 12541];
  return (
    <>
      <div className="income-chart-section">
        <div className="income-chart-title">
          <h3>Total income</h3>
          <select id="cars" name="carlist" form="carform" className="select">
            <option value="volvo">Today</option>
            <option value="saab">Yesterday</option>
            <option value="opel">Week</option>
            <option value="audi">Month</option>
            <option value="audi">Year</option>
          </select>
        </div>

        <div className="donut-chart">
          {/* <Chart
            options={options}
            series={series}
            type="donut"
            width="100%"
            height={380}
          /> */}

          <DonutChart />
        </div>
      </div>
    </>
  );
};

export default IncomeChart;
