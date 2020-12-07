import React from "react";
import ReactApexChart from "react-apexcharts";
import generateTotalTimeSeries from "./TotalTimeSeries";
import { getOrderData } from "../connector";

export default class OrdersGraphTotal extends React.Component {
  constructor(props) {
    //   var date = new Date(Date.UTC(2020, 0, 1));
    super(props);

    this.state = {
      data: generateTotalTimeSeries(new Date(2018, 8, 1).getTime(), 28, {
        min: 10,
        max: 600,
      }),
    };
  }

  async componentDidMount() {
    getOrderData()
      .then((res) => {
        // TODO process orders into time series per month
        /*
          this.setState({
            data: ...,
          })
          */
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    let config = {
      totalSeriesArea: [
        {
          name: "Total Orders",
          data: this.data,
        },
      ],
      totalOptionsArea: {
        chart: {
          id: "AllOrders",
          group: "orders",
          type: "area",
          background: "#FFFFFF",
        },
        title: {
          text: "",
          align: "left",
          style: {
            color: "#01C9E1",
          },
        },
        colors: ["#01C9E1"],
        stroke: {
          width: 1.5,
        },
        xaxis: {
          type: "datetime",
          labels: {
            show: true,
            format: "MMM yyyy",

            style: {
              fontSize: "10px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
            },
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          title: {
            text: "Orders",
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: "#01C9E1",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
            },
          },
        },
      },
    };

    return (
      <div id="wrapper">
        <div id="chart-area">
          <ReactApexChart
            options={config.totalOptionsArea}
            series={config.totalSeriesArea}
            type="area"
            height={300}
          />
        </div>
      </div>
    );
  }
}
