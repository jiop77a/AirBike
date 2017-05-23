import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';
import BikeDetailContainer from './bike_detail/bike_detail_container';
import FeaturedBikeContainer from './featured_bikes/featured_bike_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div>

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>

      <Route exact path="/" component={FeaturedBikeContainer} />
      <Route path="/bikes/:bikeId" component={BikeDetailContainer} />
      <Route path="/search" component={SearchContainer} />

  </div>
);

export default App;
