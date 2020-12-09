import React from "react";
import Frame from "../components/Frame";
import Line from "../components/Line";
import SubscriptionsGraph from "../components/graphs/SubscriptionsGraph";

const glance1data = {
  data: "172",
};

const glance2data = {
  data: "1,722",
};

const glance3data = {
  data: "3,172",
};

export default class Glance extends React.Component {
  render() {
    return (
      <div>
        <div className="align row">
          <Frame data="frame even3 tile glance1">
            <div
              className="tile_text"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <div style={{ marginBottom: 10 }}>Total # Subscriptions</div>
              <div style={{ fontSize: 40 }}>{glance1data.data}</div>
            </div>
          </Frame>
          <Frame data="frame even3 tile glance1">
            <div
              className="tile_text"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <div style={{ marginBottom: 10 }}>Total Orders Processed</div>
              <div style={{ fontSize: 40 }}>{glance2data.data}</div>
            </div>
          </Frame>
          <Frame data="frame even3 tile glance1">
            <div
              className="tile_text"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <div style={{ marginBottom: 10 }}>Total Pounds Washed</div>
              <div style={{ fontSize: 40 }}>{glance3data.data}</div>
            </div>
          </Frame>
        </div>
      </div>
    );
  }
}
