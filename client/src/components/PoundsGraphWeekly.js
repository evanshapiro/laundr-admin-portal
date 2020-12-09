import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import weeklyPounds from "./weeklyPounds";
import {getOrderData} from "../connector"



const PoundsGraphWeekly = () => {

  const [orderData, setOrderData] = useState(null)
  const [hasOrderData, setHasOrderData] = useState(false)
  const [weekSeries, setWeekSeries] = useState(null)
  const [weekOptions, setWeekOptions] = useState({
    chart: {
      id: "WeeklyOrders",
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
          style: {
              color: '#01C9E1',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
          },
      },
      labels: {
        
        maxWidth: 40,
        
      }
    }
  })

  

  const getOrderDataNow = async () =>{
    if(!hasOrderData){
      const res = await getOrderData()
      setOrderData(res)
      setHasOrderData(true)
     
    }

  }

  getOrderDataNow()
  
 
  if(weekSeries === null && orderData != null){
    const data = weeklyPounds(new Date() - (86400000*77),orderData)
    
    const d = [{  
      name: 'Weekly Orders',
      data: data,
    }] 
    setWeekSeries(d)
  }
   

    return (
      <div id="wrapper">
          <div id="chart-area">
          {weekSeries !== null && (<ReactApexChart 
            options={weekOptions} 
            series={weekSeries} 
            type="area" 
            height={300} />)}
          </div>
      </div>
    );
  }

  export default PoundsGraphWeekly


