import React from "react";
import Frame from "../Frame";
import Line from "../Line";

export default class PoundsGraph extends React.Component {
  render() {
    return (
      <div>
        <div className="align">
          <Frame data="frame full">
            <div style={{ justifyContent: "space-around" }}>
              <div className="frame_header">Total Lbs Washed</div>
              <Line />
            </div>
          </Frame>
        </div>
      </div>
    );
  }
}
