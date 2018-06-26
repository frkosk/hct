import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';

class UserOrder extends Component {
  render() {
    return (
      <div className="col-sm-4">
      <h1>Orders</h1>
      <ul className="list-group list-group-flush">
        {this.props.order.map((item, i) => (
          <Order
          orderName={item.name}
          orderCount={item.count}
          key={i}
          />
        ))}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  }
};

export default connect (
  mapStateToProps
)(UserOrder);
