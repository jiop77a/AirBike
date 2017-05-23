
import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import BikeDetailContainer from '../bike_detail/bike_detail_container';

const personalGreeting = (currentUser, logout) => (
  <div>
    <header>
      <Link to="/">Air Bike</Link>
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    </header>
  </div>
);

const impersonalGreeting = () => (
  <div>
    <header>
      <Link to="/">Air Bike</Link>
      <hgroup className="header-group">
        <Link to="/signup" className="header-button">Sign Up</Link>
        <Link to="/login" className="header-button">Log In</Link>
      </hgroup>
    </header>
  </div>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) :
  impersonalGreeting()
);

export default Greeting;
