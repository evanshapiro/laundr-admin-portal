import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  FlexibleXYPlot,
} from "react-vis";

export default class Line extends React.Component {
  render() {
    const LineData = LineSeries;

    return (
      <div class="rv-xy-plot" style={{ flex: 1 }}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: "95%",
            height: "40vh",
          }}
        >
          <FlexibleXYPlot>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <ChartLabel
              text="X Axis"
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.025}
              yPercent={1.01}
            />
            <ChartLabel
              text="Y Axis"
              className="alt-y-label"
              includeMargin={false}
              xPercent={0.06}
              yPercent={0.06}
              style={{
                transform: "rotate(-90)",
                textAnchor: "end",
              }}
            />
            <LineData
              data={[
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
              ]}
            />
          </FlexibleXYPlot>
        </div>
      </div>
    );
  }
}
