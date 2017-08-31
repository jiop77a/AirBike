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
      pos: 0,
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
    let bottom = pos + 388;
    // console.log(pos);
    if (bottom > (height - 364)) {
      return 'noFixLow';
    } else if (pos < 87) {
      return 'noFixHi';
    } else {
      return '';
    }
  }

  averageRating(reviews) {
    let ratings = [];
    let average;
    if (Object.keys(reviews).length === 0) {
      average = 0;
    } else {
      for (let i = 0; i < values(reviews).length; i++) {
        ratings.push(values(reviews)[i].rating);
      }
      let sum = ratings.reduce((acc, el) => acc + el);
      average = sum / ratings.length;
    }
    return Math.round(average);
  }

  render() {
    const {
      bikeDetail,
      currentUser,
      createReview,
      clearReviewErrors,
      createBooking,
      bookingErrors,
      clearBookingErrors
    } = this.props;

    const { reviews, cost } = bikeDetail;

    const optionalReviewForm = (user) => {
      if (user) {
        return <ReviewForm
                  createReview = {createReview}
                  user = {currentUser}
                  bikeId = {bikeDetail.id}
                  clearErrors = {clearReviewErrors}/>;
      } else {
        return <p>You must be logged in to leave a review</p>;
      }
    };

    const optionalBookingForm = (user) => {
      if (user) {
        return <BookingForm
                  averageRating = {this.averageRating(reviews)}
                  cost = {cost}
                  createBooking = {createBooking}
                  userId = {currentUser.id}
                  bikeId = {bikeDetail.id}
                  errors = {bookingErrors}
                  clearErrors = {clearBookingErrors}/>;
      } else {
        return <p>You must be logged in to book this bike</p>;
      }
    };

    const dotspace = " · ";

    return (
      <section className="bike-detail">
        <section className="details-and-reviews">
          <section className="details-and-form">
            <div className="detail-content">
              <div className="bike-detail-label">
                <div id="description">{bikeDetail.description}</div>
                <div id="city">
                  {bikeDetail.city}{dotspace}
                  <span id="lighter-font">{bikeDetail.variety} Bike</span>
                </div>
              </div>
            </div>
          </section>
          <section className="reviews-and-form">
            <div className="review-list">
              <h2>Reviews</h2>
              <ul className="review-items">
                {values(reviews).map(review =>
                  <ReviewItem
                    key = {review.id}
                    review = {review}
                    user = {this.props.currentUser}
                    deleteReview = {this.props.deleteReview}/>
                )}
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
