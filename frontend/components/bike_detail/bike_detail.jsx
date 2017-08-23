import React, { Component } from 'react';
import { values } from 'lodash';
import ReviewItem from './review_item';
import ReviewForm from './review_form';
import BookingForm from '../bookings/booking_form';
import { Footer } from '../greeting/footer';

class BikeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchBike(parseInt(this.props.match.params.bikeId));
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  componentWillReceiveProps(nextProps) {
    if (parseInt(this.props.match.params.bikeId) !==  parseInt(nextProps.match.params.bikeId)) {
      this.props.fetchBike(parseInt(nextProps.match.params.bikeId));

    if ((this.props.currentUser.id) !== (nextProps.currentUser.id)) {
      this.props.fetchBookings(this.props.currentUser.id);
      }
    }
  }

  handleScroll() {
    let scrollTop = $(document).scrollTop();
    this.setState({
      pos: scrollTop
    });
  }

  renderErrors() {
    return(
      <ul className="bike-detail-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error.slice(4)}</li>
        ))}
      </ul>
    );
  }

  newId() {
    // console.log(this.state.pos);
    let height = $(document).height();
    let pos = this.state.pos;
    let bottom = pos + 620;
    console.log(pos);
    if (bottom > (height - 372.67)) {
      return 'noFixLow';
    } else if (pos < 108) {
      return 'noFixHi';
    } else {
      return '';
    }
  }

  render() {
    const { bikeDetail, currentUser, createReview, clearReviewErrors, createBooking, bookingErrors, clearBookingErrors } = this.props;
    const { reviews } = bikeDetail;

    const optionalReviewForm = (user) => {
      if (user) {
        return <ReviewForm createReview = {createReview} user = {currentUser} bikeId = {bikeDetail.id} clearErrors = {clearReviewErrors}/>;
      } else {
        return <p>You must be logged in to leave a review</p>;
      }
    };

    const optionalBookingForm = (user) => {
      if (user) {
        return <BookingForm createBooking = {createBooking} userId = {currentUser.id} bikeId = {bikeDetail.id} errors = {bookingErrors} clearErrors = {clearBookingErrors}/>;
      } else {
        return <p>You must be logged in to book this bike</p>;
      }
    };

    return (
      <section className="bike-detail">
        <section className="details-and-reviews">

          <section className="details-and-form">
            <div className="detail-content">
              <div className="bike-detail-label">
                <span><strong>{bikeDetail.city}</strong></span>
                <span>Type: <strong>{bikeDetail.variety}</strong></span>
              </div>
              <div className="details-container">
                <h2>About This Bike</h2>
                <article className="bike-detail-description">
                  {bikeDetail.description}
                </article>
              </div>
            </div>
          </section>
          <section className="reviews-and-form">
            <div className="review-list">
              <h2>Reviews</h2>
              <ul className="review-items">
                {values(reviews).map(review => <ReviewItem key = {review.id} review = {review} user = {this.props.currentUser} deleteReview = {this.props.deleteReview}/>)}
              </ul>
            </div>
            <div className="review-form-container">
              <h2>Create Review</h2>
              {optionalReviewForm(Boolean(this.props.currentUser))}
              {this.renderErrors()}
            </div>
          </section>
        </section>
        <section className="bike-detail-figure" id={this.newId()}>
          <img src ={bikeDetail.picture_url} alt={bikeDetail.description} />
          <div className="booking-form-container">
            {optionalBookingForm(Boolean(this.props.currentUser))}
          </div>
        </section>
      </section>


    );
  }
}

export default BikeDetail;
