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

const LineData = LineSeries;

const Line = (props) => (
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

        <LineData data={props.data} />
      </FlexibleXYPlot>
    </div>
  </div>
);

export default Line;
