import React from "react";
import ReactApexChart from "react-apexcharts";
import generateWeeklyTimeSeries from "./weekWiseTimeSeries";

export default class PoundsGraphWeekly extends React.Component {
    
    constructor(props) {
        
    //   var date = new Date(Date.UTC(2020, 0, 1));
      super(props);

      this.state = {

        weekSeries: [{
          name: 'Weekly Pounds Processed',
          data: generateWeeklyTimeSeries((new Date() - (86400000*77)), 12, {
            min: 10,
            max: 100
          })
        }],
        weekOptions: {
          chart: {
            id: 'WeeklyOrders',
            group: 'orders',
            type: 'line',
            height: 160,
            background: '#F9F9F9',
          },
          title: {
            text: '',
            align: 'left',
            style: {
                color: '#01C9E1',
            },
          },
          colors: ['#01C9E1'],
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
          }
        },
      };
    }

    render() {
      return (
        <div id="wrapper">   
            <div id="chart-line2">
                <ReactApexChart options={this.state.weekOptions} series={this.state.weekSeries} type="line" height={300} />
            </div>
        </div>
      );
    }
  }


