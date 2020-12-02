import React from "react";
import ReactApexChart from "react-apexcharts";
import generateTotalTimeSeries from "./TotalTimeSeries";


export default class SubsFamily extends React.Component {
    
    constructor(props) {
        
    //   var date = new Date(Date.UTC(2020, 0, 1));
      super(props);

      this.state = {

        totalSeriesArea: [{
            name: 'Family Subscribers',
            data: generateTotalTimeSeries(new Date(2018, 8, 1).getTime(), 28, {
              min: 10,
              max: 600
            })
          }],
          totalOptionsArea: {
            chart: {
              id: 'FamilySubscribers',
              group: 'orders',
              type: 'area',
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
                    text: "Subscriber Count",
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
            
            
            <div id="chart-area">
                <ReactApexChart options={this.state.totalOptionsArea} series={this.state.totalSeriesArea} type="area" height={300} />
            </div>
           
        </div>
      );
    }
  }


