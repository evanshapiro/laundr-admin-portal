import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import generateMonthlyTimeSeries from "./MonthWiseTimeSeries";
import {getOrderData} from '../connector'

const OrdersGraphMonthly = (props) => {
  
  const [orderData, setOrderData] = useState(null)
  const [hasOrderData, setHasOrderData] = useState(false)
  const [monthSeries, setMonthSeries] = useState(null)
  const [monthOptions, setMonthOptions] = useState({
    chart: {
      id: "MonthlyOrders",
      group: 'orders',
      type: 'line',
      height: 160,
      background: '#FFFFFF',
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
          format: 'MMM yy', //changes 
         
          style: {
              fontSize: '10px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
          },   
      },

    },
    yaxis: {
      title: {
          text: "Orders",
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
  })



  const getOrderDataNow = async () =>{
    if(!hasOrderData){
      const res = await getOrderData()
      setOrderData(res)
      setHasOrderData(true)
    }

  }

  getOrderDataNow()

  if(monthSeries === null && orderData != null){
    const data = generateMonthlyTimeSeries(new Date() - (604800000*48), orderData)
    const d = [{  
      name: 'Monthly Orders',
      data: data,
    }] 
    setMonthSeries(d)
  }

 

  return (
    <div id="wrapper">
        <div id="chart-line">
        {monthSeries !== null && (<ReactApexChart 
          options={monthOptions} 
          series={monthSeries} 
          type="area" 
          height={300} />)
        }
        </div>
    </div>
  );
  }

  export default OrdersGraphMonthly


