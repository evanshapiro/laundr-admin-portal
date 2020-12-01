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
              <Line data={random3.data} />
            </div>
          </Frame>
        </div>
      </div>
    );
  }
}

const random1 = {
  data: [
    { x: 1, y: 3 },
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
    { x: 1, y: 5 },
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
