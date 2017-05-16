# Component Hierarchy

## AuthFormContainer

* AuthForm

## HomeContainer

* NavHeader
* SearchBar
* FeaturedIndex
  * Featured Item
  * Featured Item
  * ...
* Footer

## SpotContainer

* NavHeader
* SearchBar
* BookingForm
* ReviewIndex
  * Review Item
  * Review Item
  * ...
* ReviewForm
* Footer

## BookingsContainer

* BookingsIndex
  * Booking Item
  * Booking Item
  * ...
* Footer

## SearchContainer

* MapResults
* ResultIndex
  * Result Item
  * Result Item
  * ...
* Footer

# Routes

Path | Component
------------ | -------------
"/sign-up" | AuthFormContainer
"/sign-in" | AuthFormContainer
"/" | HomeContainer
"/houses/:id" | HouseContainer
"/:userId/bookings" | BookingsContainer
"/search" | SearchContainer
