import React from "react";
import ReactApexChart from "react-apexcharts";
import generateMonthlyTimeSeries from "./MonthWiseTimeSeries";


export default class OrdersGraphMonthly extends React.Component {
    
    constructor(props) {
        
    //   var date = new Date(Date.UTC(2020, 0, 1));
      super(props);

      this.state = {

        monthSeries: [{
            name: 'Monthly Orders',
            data: generateMonthlyTimeSeries((new Date() - (86400000*360)), 12, {
              min: 10,
              max: 500
            })
        }],
        monthOptions: {
            chart: {
              id: 'MonthlyOrders',
              group: 'orders',
              type: 'line',
              height: 160,
              background: '#F9F9F9',
            },
            
            colors: ['#FF5A39'],
            stroke: {
                width: 1.5
            },
            xaxis:{
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
                    text: "Orders",
                    rotate: -90,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: '#FF5A39',
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                    },
                },
            },
          },
        
      };
    }

    render() {
      return (
        <div id="wrapper">
            
            
            <div id="chart-line3">
                <ReactApexChart options={this.state.monthOptions} series={this.state.monthSeries} type="area" height={300} />
            </div>
           
        </div>
      );
    }
  }


