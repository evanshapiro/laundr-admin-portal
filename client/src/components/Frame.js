import React from "react";

export default class Frame extends React.Component {
  render() {
    return (
      <div className={this.props.data}>
        <div className="framework">
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}