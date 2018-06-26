import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOrder } from '../actions';
import avatar from '../avatar.png';

class User extends Component {
  constructor (props) {
    super(props);
    this.user = this.props.user;
  }
  render() {
    return (
      <li
        className="list-group-item"
        onClick={() => {
          this.props.fetchOrder(this.user.id)
        }}
      >
        <img src={(this.user.pictureUrl ? this.user.pictureUrl : avatar)} className="rounded float-left rounded-circle mt-2 mr-3" alt={this.user.name} width="60" height="60" />
        <small>id: {this.user.id}</small><br/>
        <h2 className="h5">{this.user.name}</h2>
        phone: {this.user.phone}
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
  return bindActionCreators({
    fetchOrder : fetchOrder
  }, dispatch);
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(User);
