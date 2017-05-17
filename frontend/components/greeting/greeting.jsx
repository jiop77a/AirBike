
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <div>
    <header>
      <h1>Air Bike</h1>
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>

    </header>
</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) :
  <Redirect to="/login" />
);

export default Greeting;
