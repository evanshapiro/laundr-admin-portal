import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import generateAll from "./AllOrdersSeries";
import {getOrderData} from '../connector'

const OrdersGraphTotal = (props) => {
  
  const [orderData, setOrderData] = useState(null)
  const [hasOrderData, setHasOrderData] = useState(false)
  const [totalSeries, setTotalSeries] = useState(null)
  const [totalOptions, setTotalOptions] = useState({
    chart: {
      id: "AllOrders",
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
              color: '#01C9E1',
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

  if(totalSeries === null && orderData != null){
    const data = generateAll(new Date() - (2592000000*48),orderData)
    const d = [{  
      name: 'All Orders',
      data: data,
    }] 
    setTotalSeries(d)
  }

 

  return (
    <div id="wrapper">
        <div id="chart-line">
        {totalSeries !== null && (<ReactApexChart 
          options={totalOptions} 
          series={totalSeries} 
          type="area" 
          height={300} />)
        }
        </div>
    </div>
  );
  }

  export default OrdersGraphTotal


