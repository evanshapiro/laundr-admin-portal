import React from "react";
import Frame from "../Frame";
import Line from "../Line";
import SubsAll from "../SubsAll";
import SubsStudent from "../SubsStudent";
import SubsStandard from "../SubsStandard";
import SubsFamily from "../SubsFamily";
import SubsPlus from "../SubsPlus";
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
                  <SubsAll/>
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsStudent/>
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsStandard/>
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsPlus/>
                </div>
              </Frame>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="align">
              <Frame data="frame full">
                <div style={{ justifyContent: "space-around" }}>
                  <div className="frame_header">Subscriptions</div>
                  <SubsFamily/>
                </div>
              </Frame>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

const random1 = {
  data: [
    { x: 1, y: 1 },
    { x: 2, y: 5 },
    { x: 3, y: 15 },
    { x: 4, y: 12 },
    { x: 5, y: 14 },
    { x: 6, y: 11 },
    { x: 7, y: 15 },
    { x: 8, y: 12 },
    { x: 9, y: 16 },
    { x: 10, y: 5 },
    { x: 11, y: 15 },
    { x: 12, y: 20 },
  ],
};

const random2 = {
  data: [
    { x: 1, y: 1 },
    { x: 2, y: 15 },
    { x: 3, y: 5 },
    { x: 4, y: 2 },
    { x: 5, y: 13 },
    { x: 6, y: 10 },
    { x: 7, y: 17 },
    { x: 8, y: 12 },
    { x: 9, y: 18 },
    { x: 10, y: 15 },
    { x: 11, y: 14 },
    { x: 12, y: 20 },
  ],
};

const random3 = {
  data: [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 2 },
    { x: 4, y: 10 },
    { x: 5, y: 12 },
    { x: 6, y: 8 },
    { x: 7, y: 15 },
    { x: 8, y: 12 },
    { x: 9, y: 14 },
    { x: 10, y: 20 },
    { x: 11, y: 16 },
    { x: 12, y: 25 },
  ],
};
