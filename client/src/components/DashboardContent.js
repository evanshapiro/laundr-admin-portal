import React from "react";
import Frame from "../components/Frame";
import Line from "../components/Line";
export default class DashboardContent extends React.Component {
  render() {
    return (
        <div>

    
      <div className="align">
      <Frame data="frame full">
      <div style={{justifyContent: "space-around"}}>
        <div className="frame_header">
            Subscriptions
        </div>
        <Line />
      </div>
      </Frame>
    </div>
    <div className="align row">
      <Frame data="frame even3 tile glance1">
        <div className="tile_text" style={{textAlign: "center", justifyContent: "center"}}>
          <div style={{marginBottom: 10}}>Total # Subscriptions</div>
          <div style={{fontSize:40}}>172</div>
        </div>
      </Frame>
      <Frame data="frame even3 tile glance2">
        <div className="tile_text" style={{textAlign: "center", justifyContent: "center"}}>
          <div style={{marginBottom: 10}}>Total Orders Processed</div>
          <div style={{fontSize:40}}>1,722</div>
        </div>
      </Frame>
      <Frame data="frame even3 tile glance2">
        <div className="tile_text" style={{textAlign: "center", justifyContent: "center"}}>
          <div style={{marginBottom: 10}}>Total Pounds Washed</div>
          <div style={{fontSize:40}}>3,172</div>
        </div>
      </Frame>
    </div>
    <div className="align">
      <Frame data="frame full">
      <div style={{justifyContent: "space-around"}}>
            <div className="frame_header">
                Orders Processed
            </div>
            <Line />
        </div>
      </Frame>
    </div>
    <div className="align">
      <Frame data="frame full">
      <div style={{justifyContent: "space-around"}}>
        <div className="frame_header">
            Total Lbs Washed
        </div>
        <Line />
        </div>
      </Frame>
    </div>
        </div>
    );
  }
}