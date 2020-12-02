import React from "react";
import Frame from "../components/Frame";
import { getSubscriptionData, getOrderData } from '../connector'

const glance3data = {
  data: "3,172",
};

export default class Glance extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      subscriptions: null,
      pounds: null,
      orders: null
    }
  }
  
  async componentDidMount(){
    getSubscriptionData()
      .then(res => {
        this.setState({
          subscriptions: res.length,
        })
      }).catch(err => {
        console.error(err)
      })
    getOrderData()
      .then(res => {
        this.setState({
          pounds: res.map(order => parseFloat(order.orderWeight)).reduce((a,b) => a + b).toString().split('.')[0],
          orders: res.length
        })
      }).catch(err => {
        console.error(err)
      })
  }

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
              <div style={{ fontSize: 40 }}>{this.state.subscriptions}</div>
            </div>
          </Frame>
          <Frame data="frame even3 tile glance1">
            <div
              className="tile_text"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <div style={{ marginBottom: 10 }}>Total Orders Processed</div>
              <div style={{ fontSize: 40 }}>{this.state.orders}</div>
            </div>
          </Frame>
          <Frame data="frame even3 tile glance1">
            <div
              className="tile_text"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <div style={{ marginBottom: 10 }}>Total Pounds Washed</div>
              <div style={{ fontSize: 40 }}>{this.state.pounds}</div>
            </div>
          </Frame>
        </div>
      </div>
    );
  }
}
