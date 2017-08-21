import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookingItem extends React.Component {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }

  remove(event) {
    event.preventDefault();
    let id = this.props.booking.id;
    this.props.deleteBooking(id);
  }

  render() {
    const { booking, deleteBooking } = this.props;

    return (
      <li className="booking-item">
        <div className="booking-picture">
          <Link to={`/bikes/${booking.bike_id}`}>
            <img src={booking.picture_url} />
          </Link>
        </div>
        <div className="booking-info">
          <h1 className="booking-city">{booking.city}</h1>
          <h2 className="booking-desc">{booking.description}</h2>
          <div className="booking-dates">
            <div className="date-item">
              <h1>Start Date</h1>
              <h2>{booking.start_date}</h2>
            </div>
            <div className="date-item">
              <h1>End Date</h1>
              <h2>{booking.end_date}</h2>
            </div>
          </div>
          <div className="booking-price">
            <h1>Price</h1>
            <h2>${booking.cost}</h2>
          </div>
        </div>
        <div className="delete-button">
          <button className= "promo-button" onClick = { this.remove }>Cancel</button>
        </div>
      </li>
    );
  }
}

export default BookingItem;
