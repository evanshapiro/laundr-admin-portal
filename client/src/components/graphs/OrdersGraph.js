import React, {useState} from "react";
import Frame from "../Frame";
import OrdersGraphDaily from "../OrdersGraphDaily";
import OrdersGraphWeekly from "../OrdersGraphWeekly";
import OrdersGraphMonthly from "../OrdersGraphMonthly";
import OrdersGraphTotal from "../OrdersGraphTotal";
import {getOrderData} from "../../connector"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const OrdersGraph = () =>  {

  const [orderData, setOrderData] = useState(null)
  const [hasOrderData, setHasOrderData] = useState(false)

  

  const getOrderDataNow = async () => {
    if(!hasOrderData){
      const res = await getOrderData()
      setOrderData(res)
      setHasOrderData(true)
    }
  }

  getOrderDataNow()

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Daily</Tab>
          <Tab>Weekly</Tab>
          <Tab>Monthly</Tab>
          <Tab>All</Tab>
        </TabList>
        <TabPanel>
          <div className="align">
            <Frame data="frame full">
              <div style={{ justifyContent: "space-around" }}>
                <div className="frame_header">Orders Processed</div>
                <OrdersGraphDaily orderData={orderData} />
              </div>
            </Frame>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="align">
            <Frame data="frame full">
              <div style={{ justifyContent: "space-around" }}>
                <div className="frame_header">Orders Processed</div>
                <OrdersGraphWeekly orderData={orderData}/>
              </div>
            </Frame>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="align">
            <Frame data="frame full">
              <div style={{ justifyContent: "space-around" }}>
                <div className="frame_header">Orders Processed</div>
                <OrdersGraphMonthly orderData={orderData}/>
              </div>
            </Frame>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="align">
            <Frame data="frame full">
              <div style={{ justifyContent: "space-around" }}>
                <div className="frame_header">Orders Processed</div>
                <OrdersGraphTotal orderData={orderData}/>
              </div>
            </Frame>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default OrdersGraph;
