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
import { fetchBikes } from '../../actions/bike_actions';

const mapStateToProps = state => ({
  bikes: selectFeaturedBikes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBikes: () => dispatch(fetchBikes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedBikes);
```

A future iteration of the site might allow those with admin access to toggle which bikes are "featured".

### Search

On the search page, on the other hand, results are filtered on the backend by passing query params (such as "City" and "Type") to the database.  This is accomplished by using a Thunk action creator to update the 'filters' slice of state based on user input, then by passing that slice of state as an argument to the same fetchBikes function seen above, before dispatching said function.  The 'filters' slice of state also comes into play in dealing with the GoogleMaps API, allowing only those bikes within the bounds of the map to appear in the search results.

```javascript
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchBikes(getState().filters)(dispatch);
};
```

One of the great aspects of React is that components can be very modular and therefore multi-purpose.  For example, on both the splash-page and the search page, the individual bikes are rendered by constructing the same kind of list:

```javascript
<ul className="featured-bikes-list">
  {bikes.map(bike => <FeaturedBikeItem key = {bike.id} bike = {bike} />)}
</ul>
```
Even though the 'bikes' which arrive at the component have made it there via different paths (frontend vs. backend selection being the main difference), the modularity of the component FeaturedBikeItem makes it possible to display and style the information displayed in virtually identical ways.  

### Showpage

In addition to Bikes and Users, the database also features Bookings and Reviews, both of which link bikes and users via foreign keys.  Reviews are displayed on the showpage directly, while a user can access their bookings via a separate 'bookings' link on the nav bar.  The current user is globally bootstrapped, making it possible to allow only logged-in users to book bikes, leave reviews.  As an additional security measure, a custom React route redirects the user to the splash-page if they try to access another user's bookings via URI (e.g. /bookings/11).

Error handling is accomplished first on the backend at the model validation level, with custom messages passed from the API call to action creators that populate an error array in the appropriate slice of state.  Errors are cleared by dispatching a different CLEAR_ERRORS action creator, which in one case takes advantages of the 'waterfall' behavior of the Javascript switch operator.  Consider the following example:

![](/app/assets/images/Errormessage.png)

At this point, the user 'Guest' has submitted a review, and then pressed the Submit button again, as a result of which they received the two errors shown below the button.  Note additionally that only the current user is presented with a 'delete' option.  Now, when the user deletes their review, one would also expect the errors to be cleared.  This I accomplished not by dispatching an action from the component itself, but rather by chaining the CLEAR_ERRORS action creator to the REMOVE_REVIEW action creator:

```javascript

const defaultBike = {
 reviews: {},
 errors: []
};

export default (state = defaultBike, action) => {
  let newBike = merge({}, state);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BIKE:
      return merge({}, defaultBike, action.bike);
    case RECEIVE_REVIEW:
      newBike.reviews[action.review.id] = action.review;
      return newBike;
    case RECEIVE_REVIEW_ERRORS:
      newBike.errors = action.errors;
      return newBike;
    case REMOVE_REVIEW:
      delete newBike.reviews[action.review.id];
      // return newBike (because waterfall)
    case CLEAR_REVIEW_ERRORS:
      newBike.errors = [];
      return newBike;
    default:
      return state;
  }
}

```

In this way, the CLEAR_REVIEW_ERRORS action can be called independently, and will also occur whenever a REMOVE_REVIEW is received.  

## Future Directions

### Search

As of now, the site only allows users to search in three Bay Area cities: San Francisco, Oakland, and Berkeley.  However, I am interested in expanding the search capacity to allow for bike rentals nationwide!  
