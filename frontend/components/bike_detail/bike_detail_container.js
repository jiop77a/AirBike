import { connect } from 'react-redux';
import BikeDetail from './bike_detail';
import { fetchBike, createReview, deleteReview, clearReviewErrors } from '../../actions/bike_actions';
import { selectBookings } from '../../reducers/selectors';
import { fetchBookings, createBooking, clearBookingErrors} from '../../actions/booking_actions';

const mapStateToProps = ({ bikeDetail, session, bookings }) => ({
  bikeDetail,
  errors: bikeDetail.errors,
  currentUser: session.currentUser,
  bookings: selectBookings(bookings),
  bookingErrors: bookings.errors
});

const mapDispatchToProps = dispatch => ({
  fetchBike: id => dispatch(fetchBike(id)),
  createReview: review => dispatch(createReview(review)),
  deleteReview: id => dispatch(deleteReview(id)),
  clearReviewErrors: () => dispatch(clearReviewErrors()),
  createBooking: booking => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors()),
  fetchBookings: user_id => dispatch(fetchBookings(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BikeDetail);
