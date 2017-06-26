import Modal from 'react-modal';
import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import BikeDetailContainer from '../bike_detail/bike_detail_container';

const personalGreeting = (currentUser, logout) => (
  <div>
    <header>
      <Link to="/"><img src="http://orbizadventure.com/wp-content/uploads/2016/05/Repair.jpg"></img></Link>
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <Link className = "bookings-link" to={`/bookings/${currentUser.id}`}>Your Bookings</Link>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    </header>
  </div>
);



class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
}

  impersonalGreeting() {
    return (
    <div>
      <header>
        <Link to="/">
          <img
            src=
            "http://orbizadventure.com/wp-content/uploads/2016/05/Repair.jpg">
          </img>
        </Link>
        <hgroup className="header-group">
          <button
            onClick={this.handleClick.bind(this)}
            className="header-button">
            Sign Up
          </button>
          <button
            onClick={this.handleClick.bind(this)}
            className="header-button">
            Log In
          </button>
        </hgroup>
      </header>
      <Modal
        isOpen={this.state.modalOpen}
        contentLabel="Signup and Login"
        onRequestClose={this.onModalClose.bind(this)}>
        ...content
      </Modal>
    </div>);
  }

  handleClick() {
    this.setState({
      modalOpen: true
    });
  }

  onModalClose() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      currentUser ? personalGreeting(currentUser, logout) :
      this.impersonalGreeting.bind(this)()
    );
  }
}

export default Greeting;
