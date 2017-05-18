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
  bikes: {
    1: {
      id: 1,
      description: "a lovely bike"
      city: "San Francisco",
      cost: 35
      lat: 37.786875
      lng: -122.418318
      featured: true
      picture_url:
      variety: "Mountain"
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
