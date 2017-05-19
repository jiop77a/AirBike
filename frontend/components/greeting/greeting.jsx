
import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import FeaturedBikeContainer from './featured_bike_container';
import BikeDetailContainer from '../bike_detail/bike_detail_container';

const personalGreeting = (currentUser, logout) => (
  <div>
    <header>
      <h1>Air Bike</h1>
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    </header>

    <Route exact path="/" component={FeaturedBikeContainer} />
    <Route exact path="/bikes/:bikeId" component={BikeDetailContainer} />

</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) :
  <Redirect to="/login" />
);

export default Greeting;
