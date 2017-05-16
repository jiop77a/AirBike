```js
{
  currentUser: {
    id: 1,
    username: "guest"
  },
  forms: {
   signUp: {errors: []},
   logIn: {errors: []},
   reviewForm: {errors: ["body can't be blank"], ...}
   bookingform: {errors: ["house is already booked for those dates"], ...}
 },
  spots: {
    1: {
      id: 1,
      description: "a lovely house"
      city: "San Francisco",
      cost: 185
      location_lat: 37.786875
      location_long: -122.418318
      featured: true
    },
    2: {
      id: 2
      ...,
    }
  },
  spotDetail: {
    id: 5,
    description: "a truly spectacular abode",
    city: "Berkeley",
    reviews: [
      {
        username: "guest",
        rating: 7.5,
        body: "you could do a lot better..."
      },
      {
        ...
      }
    ],
    bookings: [
      {
        start_date: 05/14/17,
        end_date: 05/18/17
      },
      {
        ...
      }
    ]
  },
  bookingDetail: {
    userid: 7,
    spots: [
      {
        id: 12
        city: "San Francisco",
        start-date: 05/14/17,
        end-date: 05/18/17,
        description: "a very good house"
      },
      {
        ...
      }
    ]
  }
}
