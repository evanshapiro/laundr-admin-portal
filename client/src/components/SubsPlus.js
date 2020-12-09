import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import generatePlus from "./generatePlus";
import {getSubscriptionData} from '../connector'


const SubsPlus = (props) => {
  
  const [subscriptionData, setSubscriptionData] = useState(null)
  const [hasSubscriptionData, setHasSubscriptionData] = useState(false)
  const [monthSeries, setMonthSeries] = useState(null)
  const [monthOptions, setMonthOptions] = useState({
    chart: {
      id: "PlusSubscribers",
      group: 'subscribers',
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
          text: "Subscribers",
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



  const getSubscriptionDataNow = async () =>{
    if(!hasSubscriptionData){
      const res = await getSubscriptionData()
      setSubscriptionData(res)
      setHasSubscriptionData(true)
    }

  }

  getSubscriptionDataNow()

  if(monthSeries === null && subscriptionData != null){
    const data = generatePlus(new Date() - (2592000000*48), subscriptionData)
    const d = [{  
      name: 'Plus Subscribers',
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

  export default SubsPlus


