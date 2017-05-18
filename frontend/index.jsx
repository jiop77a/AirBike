import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchBikes, fetchBike} from './util/bike_api_util';

window.fetchBikes = fetchBikes;
window.fetchBike = fetchBike;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});
