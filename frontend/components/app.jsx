import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <h1>Air Bike</h1>
    <GreetingContainer />
  </div>
);

export default App;
