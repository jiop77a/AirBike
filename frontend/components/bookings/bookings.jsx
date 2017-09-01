import React, { Component } from 'react';
import BookingItem from './booking_item';

class Bookings extends Component {
  componentDidMount() {
    this.props.fetchBookings(parseInt(this.props.match.params.userId));
  }

  componentWillReceiveProps(nextProps) {
    if (parseInt(this.props.match.params.userId) !==  parseInt(nextProps.match.params.userId)) {
      this.props.fetchBookings(parseInt(nextProps.match.params.userId));
    }
  }

  optionalMessage(bookings) {
    if (bookings.length === 0) {
      return (<p>You have no bookings to display.</p>);
    }
  }

  render() {
    const { bookings, deleteBooking } = this.props;

    return (
      <section className="bookings-container">
        <ul className="bookings-list">
          {this.optionalMessage(bookings)}
          {bookings.map(booking =>
            <BookingItem
              key = {booking.id}
              booking = {booking}
              deleteBooking = {deleteBooking}
          />)}
        </ul>
      </section>
    );
  }
}

export default Bookings;
