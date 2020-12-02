import React from "react";
import ReactApexChart from "react-apexcharts";
import generateDailyTimeSeries from "./dayWiseTimeSeries";

export default class PoundsGraphDaily extends React.Component {
    
    constructor(props) {
        
    //   var date = new Date(Date.UTC(2020, 0, 1));
      super(props);

      this.state = {

        daySeries: [{
          
          name: 'Daily Pounds Processed',
          data: generateDailyTimeSeries((new Date() - (86400000*11)), 12, {
            min: 10,
            max: 30
          })
        }],
        dayOptions: {
          chart: {
            id: "DailyOrders",
            group: 'orders',
            type: 'line',
            height: 160,
            background: '#F9F9F9',
          },
          title: {
            text: '',
            align: 'left',
            style: {
                color: '#FF5A39',
            },
          },
          colors: ['#FF5A39'],
          stroke: {
            width: 1.5
          },
          xaxis:{
            type: 'datetime',
            labels: {
                show: true,
                format: 'dd MMM yy', //changes 
               
                style: {
                    fontSize: '10px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                },   
            },

          },
          yaxis: {
            title: {
                text: "Pounds Processed",
                style: {
                    color: '#FF5A39',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                },
            },
            labels: {
              
              maxWidth: 35,
              
            }
          }
        },
     
      };
    }

    render() {
      return (
        <div id="wrapper">
            <div id="chart-area">
                <ReactApexChart options={this.state.dayOptions} series={this.state.daySeries} type="area" height={300} />
            </div>
        </div>
      );
    }
  }


