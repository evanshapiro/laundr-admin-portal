import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import generateDailyTimeSeries from "./dayWiseTimeSeries";
import {getOrderData} from '../connector'

const OrdersGraphDaily = (props) => {
  
  const [orderData, setOrderData] = useState(null)
  const [hasOrderData, setHasOrderData] = useState(false)
  const [daySeries, setDaySeries] = useState(null)
  const [dayOptions, setDayOptions] = useState({
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
          color: '#FFB600',
      },
    },
    colors: ['#FFB600'],
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
          text: "Orders",
          style: {
              color: '#FFB600',
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

  if(daySeries === null && orderData != null){
    const data = generateDailyTimeSeries(new Date() - (86400000*6), orderData)
    const d = [{  
      name: 'Daily Orders',
      data: data,
    }] 
    setDaySeries(d)
  }

 

  return (
    <div id="wrapper">
        <div id="chart-line">
        {daySeries !== null && (<ReactApexChart 
          options={dayOptions} 
          series={daySeries} 
          type="area" 
          height={300} />)
        }
        </div>
    </div>
  );
  }

  export default OrdersGraphDaily


