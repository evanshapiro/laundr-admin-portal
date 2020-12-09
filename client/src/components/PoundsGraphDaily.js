import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import dayWisePounds from "./dailyPounds";
import {getOrderData} from "../connector"



const PoundsGraphDaily = () => {

  const [orderData, setOrderData] = useState(null)
  const [hasOrderData, setHasOrderData] = useState(false)
  const [daySeries, setDaySeries] = useState(null)
  const [dayOptions, setDayOptions] = useState({
    chart: {
      id: "DailyOrders",
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
    const data = dayWisePounds(new Date() - (86400000*6),orderData)
    
    const d = [{  
      name: 'Daily Orders',
      data: data,
    }] 
    setDaySeries(d)
  }
   

    return (
      <div id="wrapper">
          <div id="chart-area">
          {daySeries !== null && (<ReactApexChart 
            options={dayOptions} 
            series={daySeries} 
            type="area" 
            height={300} />)}
          </div>
      </div>
    );
  }

  export default PoundsGraphDaily


