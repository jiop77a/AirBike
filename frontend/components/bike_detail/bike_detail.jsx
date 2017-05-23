import React, { Component } from 'react';
import { values } from 'lodash';
import ReviewItem from './review_item';
import ReviewForm from './review_form';

class BikeDetail extends Component {
  componentDidMount() {
    this.props.fetchBike(parseInt(this.props.match.params.bikeId));
  }

  componentWillReceiveProps(nextProps) {
    if (parseInt(this.props.match.params.bikeId) !==  parseInt(nextProps.match.params.bikeId)) {
      this.props.fetchBike(parseInt(nextProps.match.params.bikeId));

    }
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

  render() {
    const { bikeDetail, currentUser } = this.props;
    const { reviews } = bikeDetail;

    const optionalForm = (user) => {
      if (user) {
        return <ReviewForm createReview = {this.props.createReview} user = {this.props.currentUser} bikeId = {this.props.bikeDetail.id} clearErrors = {this.props.clearReviewErrors}/>;
      } else {
        return <p>You must be logged in to leave a review</p>;
      }
    };

    return (
      <section className="bike-detail">
        <figure className="bike-detail-figure">
          <img src ={bikeDetail.picture_url} alt={bikeDetail.description} />
        </figure>
        <section className="details-and-form">
          <div className="detail-content">
            <div className="bike-detail-label">
              <span>{bikeDetail.city}</span>
              <span>Type: {bikeDetail.variety}</span>
            </div>
            <div className="details-container">
              <h2>About This Bike</h2>
              <article className="bike-detail-description">
                {bikeDetail.description}
              </article>
            </div>
          </div>
          <div className="booking-form">
            Booking-form
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
            {optionalForm(Boolean(this.props.currentUser))}
            {this.renderErrors()}
          </div>
        </section>
      </section>


    );
  }
}

export default BikeDetail;
