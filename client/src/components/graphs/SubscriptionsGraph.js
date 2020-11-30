import React from "react";
import Frame from "../Frame";
import Line from "../Line";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class SubscriptionsGraph extends React.Component {
  render() {
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
                  <Line />
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions (t2)</div>
                  <Line />
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions (t3)</div>
                  <Line />
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions (t4)</div>
                  <Line />
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions (t5)</div>
                  <Line />
                </div>
              </Frame>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
