import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import generateFamily from "./generateFamily";
import {getSubscriptionData} from '../connector'

const SubsFamily = (props) => {
  
  const [subscriptionData, setSubscriptionData] = useState(null)
  const [hasSubscriptionData, setHasSubscriptionData] = useState(false)
  const [monthSeries, setMonthSeries] = useState(null)
  const [monthOptions, setMonthOptions] = useState({
    chart: {
      id: "FamilySubscribers",
      group: 'subscribers',
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
          text: "Subscribers",
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



  const getSubscriptionDataNow = async () =>{
    if(!hasSubscriptionData){
      const res = await getSubscriptionData()
      setSubscriptionData(res)
      setHasSubscriptionData(true)
    }

  }

  getSubscriptionDataNow()

  if(monthSeries === null && subscriptionData != null){
    const data = generateFamily(new Date() - (2592000000*48), subscriptionData)
    const d = [{  
      name: 'Family Subscribers',
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

  export default SubsFamily


