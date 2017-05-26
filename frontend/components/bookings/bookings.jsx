import React, { Component } from 'react';
import BookingItem from './booking_item';

class Bookings extends Component {
  componentDidMount() {
    this.props.fetchBookings(parseInt(this.props.match.params.userId));
  }

  componentWillReceiveProps(nextProps) {
    if (parseInt(this.props.match.params.userId) !==  parseInt(nextProps.match.params.userId)) {
      this.props.fetchBike(parseInt(nextProps.match.params.userId));
    }
  }

  render() {
    const { bookings, deleteBooking } = this.props;

    return (
      <section className="bookings-container">
        <ul className="bookings-list">
          {bookings.map(booking => <BookingItem key = {booking.id} booking = {booking} deleteBooking = {deleteBooking}
          />)}
        </ul>
      </section>
    );
  }
}

export default Bookings;
