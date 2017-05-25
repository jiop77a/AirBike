export const fetchBookings = user_id => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings',
    data: {user_id}
  })
);

export const createBooking = data => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data
  })
);

export const destroyBooking = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`
  })
);
