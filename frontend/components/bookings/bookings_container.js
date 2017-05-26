import { connect } from 'react-redux';
import Bookings from './bookings';
import { selectBookings } from '../../reducers/selectors';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = ({ bookings }) => ({
  bookings: selectBookings(bookings),
  errors: bookings.errors
});

const mapDispatchToProps = dispatch => ({
  fetchBookings: user_id => dispatch(fetchBookings(user_id)),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
