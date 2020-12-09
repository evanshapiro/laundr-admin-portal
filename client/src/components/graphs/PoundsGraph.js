import React, {useState} from "react";
import Frame from "../Frame";
import PoundsGraphDaily from "../PoundsGraphDaily";
import PoundsGraphWeekly from "../PoundsGraphWeekly";
import PoundsGraphMonthly from "../PoundsGraphMonthly";
import PoundsGraphTotal from "../PoundsGraphTotal";
import {getOrderData} from "../../connector"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const PoundsGraph = () =>  {

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
                <div className="frame_header">Total LBS Processed</div>
                <PoundsGraphDaily orderData={orderData} />
              </div>
            </Frame>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="align">
            <Frame data="frame full">
              <div style={{ justifyContent: "space-around" }}>
                <div className="frame_header">Total LBS Processed</div>
                <PoundsGraphWeekly orderData={orderData}/>
              </div>
            </Frame>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="align">
            <Frame data="frame full">
              <div style={{ justifyContent: "space-around" }}>
                <div className="frame_header">Total LBS Processed</div>
                <PoundsGraphMonthly orderData={orderData}/>
              </div>
            </Frame>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="align">
            <Frame data="frame full">
              <div style={{ justifyContent: "space-around" }}>
                <div className="frame_header">Total LBS Processed</div>
                <PoundsGraphTotal orderData={orderData}/>
              </div>
            </Frame>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PoundsGraph;
