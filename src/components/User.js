import React, { Component } from 'react';
import { connect } from 'react-redux';
import avatar from '../avatar.png';

class User extends Component {

  render() {
    const { user, fetchOrder } = this.props;
    return (
      <li
        className="list-group-item"
        onClick={fetchOrder}
      >
        <img src={(user.pictureUrl ? user.pictureUrl : avatar)} className="rounded float-left rounded-circle mt-2 mr-3" alt={user.name} width="60" height="60" />
        <small>id: {user.id}</small><br/>
        <h2 className="h5">{user.name}</h2>
        phone: {user.phone}
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    order: state.order,
    activeUserItem: 0
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder : id => dispatch({ type: "FETCH_ORDER", id })
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(User);
