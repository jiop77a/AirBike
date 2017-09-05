import React, { Component } from 'react';


class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

  this.remove = this.remove.bind(this);
  }

  remove(event) {
    event.preventDefault();
    let review = this.props.review;
    this.props.deleteReview(review.id);
  }


  render() {
    const { review, user } = this.props;

    const optionalButton = (reviewId, user) => {
      if (user && (user.id === reviewId)) {
        return <button
                  className="promo-button"
                  onClick= { this.remove }>
                  Delete
                </button>;
      } else {
        return null;
      }
    };

    const optionalId = (reviewId, user) => {
      if (user && (user.id === reviewId)) {
        return "text-fix";
      } else {
        return null;
      }
    };


    return (
      <li className="review-item">
        <div className="review-label">
          <span>{review.reviewer_name}</span>
          <span id="rating"><strong>Rating: {review.rating}/10</strong></span>
        </div>
        <div className="body-and-buttom">
          <div
            className="review-body"
            id={optionalId(review.user_id, user)}>
            {review.body}
          </div>
          <div className="delete-button">
            {optionalButton(review.user_id, user)}
          </div>
        </div>
      </li>
    );
  }
}



export default ReviewItem;
