# AirBike

[Live App](https://airbikeapp.herokuapp.com/#/)

AirBike is a full-stack web app inspired by AirBnB.  I love the convenience and functionality of AirBnb, but realized that when I arrive in a new city (particularly one with a dense urban core and decent cycling culture) the task of renting a bike becomes nearly as pressing as that of finding a place to stay.

Being not only a passionate cyclist but also an amateur mechanic, I decided to adapt the popular housing-rental app to help builders of unique bicycles connect with those who, like me, would appreciate the chance to rent a bike not only crafted with love and care, but adapted to the needs of the local environment by the experienced hands of a local.

AirBike uses Ruby on Rails on the backend, a PostgreSQL database, and React.js (making particular use of Redux) on the frontend.

## Features and Implementation

### Splash-Page

Upon entering the site, users can access individual bikes both by navigating to the search page or by selecting from among the "Featured Bikes" list.  At the database level, whether not not a bike is "featured" is coded as a boolean value in a column of the "Bikes" table.  When the page loads, all of the Bikes in state are fetched from the database, then winnowed using a Javascript selector function on the frontend...

```javascript

import { values } from 'lodash';

export const selectFeaturedBikes = ({ bikes }) => {
  let featuredArr = [];
  values(bikes).forEach(bike => {
    if (bike.featured) {
      featuredArr.push(bike);
    }
  });
  return featuredArr;
};
```

which is used to pass only the required bikes to the relevant component:

```javascript
import { connect } from 'react-redux';
import FeaturedBikes from './featured_bikes';
import { selectFeaturedBikes } from '../../reducers/selectors';
import { fetchAllBikes } from '../../actions/bike_actions';

const mapStateToProps = state => ({
  bikes: selectFeaturedBikes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBikes: () => dispatch(fetchAllBikes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedBikes);

```


A future iteration of the site might allow those with admin access to toggle which bikes are "featured".

### Search

On the search page, on the other hand, results are filtered on the backend by passing query params (such as "City" and "Type") to the database.  This is accomplished by using a Thunk action creator to update the
