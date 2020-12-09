import React, {useState} from "react";
import Frame from "../Frame";
import SubsAll from "../SubsAll";
import SubsStudent from "../SubsStudent";
import SubsStandard from "../SubsStandard";
import SubsFamily from "../SubsFamily";
import SubsPlus from "../SubsPlus";
import {getSubscriptionData} from "../../connector"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const SubscriptionsGraph = () => {

  const [subscriptionData, setSubscriptionData] = useState(null)
  const [hasSubscriptionData, setHasSubscriptionData] = useState(false)

  const getSubscriptionDataNow = async () => {
    if(!hasSubscriptionData){
      const res = await getSubscriptionData()
      setSubscriptionData(res)
      setHasSubscriptionData(true)
    }
  }

  getSubscriptionDataNow()

    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Student Plan</Tab>
            <Tab>Standard</Tab>
            <Tab>Plus</Tab>
            <Tab>Family</Tab>
          </TabList>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsAll subscriptionData={subscriptionData}/>
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsStudent subscriptionData={subscriptionData}/>
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsStandard subscriptionData={subscriptionData}/>
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsPlus subscriptionData={subscriptionData}/>
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsFamily subscriptionData={subscriptionData}/>
                </div>
              </Frame>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
}

export default SubscriptionsGraph;
