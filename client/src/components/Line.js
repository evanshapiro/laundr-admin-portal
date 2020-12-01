import React from "react";
import {
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  FlexibleXYPlot,
} from "react-vis";

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
      <FlexibleXYPlot xType="time">
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        <ChartLabel
          text=""
          className="alt-x-label"
          includeMargin={false}
          xPercent={0.025}
          yPercent={1.01}
        />
        <ChartLabel
          text=""
          className="alt-y-label"
          includeMargin={false}
          xPercent={0.06}
          yPercent={0.06}
          style={{
            transform: "rotate(-90)",
            textAnchor: "end",
          }}
        />

        <LineSeries data={props.data} />
        <LineSeries
          className="fourth-series"
          color="#FFB600"
          data={props.data2}
        />
      </FlexibleXYPlot>
    </div>
  </div>
);

export default Line;
