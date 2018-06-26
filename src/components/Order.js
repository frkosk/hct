import React, { Component } from 'react';

class Order extends Component {
  constructor (props) {
    super(props);
    this.order = this.props.order;
  }
  render() {
    return (
      <li className="list-group-item">
        {this.props.orderName}
        <span className="badge badge-secondary float-right">{this.props.orderCount}</span>
      </li>
    )
  }
}

export default Order;
