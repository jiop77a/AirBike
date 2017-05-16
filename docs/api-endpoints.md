# API endpoints

## HTML API

### Root

* GET / - loads React web app

## JSON API

## Users

* POST /api/users - sign-up

## Session

* POST /api/session - login
* DELETE /api/session - logout

## Spots

* GET /api/spots
  * search
  * query params to get houses by 'featured' or location
* GET /api/spots/:id

## Reviews

* GET /api/reviews/
  * query params to get reviews by house
* POST /api/reviews
* DELETE /api/reviews/:id

## Bookings

* GET /api/bookings
  * query params to get bookings by user
* POST /api/bookings
* DELETE /api/bookings/:id
