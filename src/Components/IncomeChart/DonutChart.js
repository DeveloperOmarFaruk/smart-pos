import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [40000, 25000, 12541],
      options: {
        labels: ["Food", "Dink", "Others"],
        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
        },
      },
    };
  }

  render() {
    return (
      <>
        <div class="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width={300}
            />
          </div>
        </div>
      </>
    );
  }
}

export default DonutChart;
