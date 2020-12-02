import React from "react";
import ReactApexChart from "react-apexcharts";
import generateTotalTimeSeries from "./TotalTimeSeries";
import { getSubscriptionData } from '../connector'


export default class SubsAll extends React.Component {

  constructor(props) {

    //   var date = new Date(Date.UTC(2020, 0, 1));
    super(props);

    this.state = {
      data: generateTotalTimeSeries(new Date(2018, 8, 1).getTime(), 28, {
        min: 10,
        max: 600
      })
    }
  }
  /*
  async componentDidMount(){
    getSubscriptionData()
      .then(res => {
        this.setState({
          data: res.length,
        })
      }).catch(err => {
        console.error(err)
      })
  }
  */

  render() {

    let totalSeriesArea = [{
      name: 'All Subscribers',
      data: this.state.data
    }]

    let totalOptionsArea = {
      chart: {
        id: 'AllSubscribers',
        group: 'orders',
        type: 'area',
        background: '#F9F9F9',
      },

      colors: ['#01C9E1'],
      stroke: {
        width: 1.5
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: true,
          format: 'MMM yyyy',

          style: {
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
          },
          offsetX: 0,
          offsetY: 0,
        },

      },
      yaxis: {
        title: {
          text: "Subscriber Count",
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#01C9E1',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
          },
        },
      },
    }

    return (
      <div id="wrapper">


        <div id="chart-area">
          <ReactApexChart options={totalOptionsArea} series={totalSeriesArea} type="area" height={300} />
        </div>

      </div>
    );
  }
}


