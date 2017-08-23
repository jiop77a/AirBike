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
    const { review } = this.props;

    const optionalButton = (reviewId, user) => {
      if (user && (user.id === reviewId)) {
        return <button onClick= { this.remove }>Delete</button>;
      } else {
        return null;
      }
    };

    return (
      <li className="review-item">
        <div className="review-label">
          <span>{review.reviewer_name}</span>
          <span id="rating">Rating: {review.rating}/10</span>
        </div>
        <div className="review-body">
          <p>{review.body}</p>
        </div>
        <div className = "delete-button">
          {optionalButton(review.user_id, this.props.user)}
        </div>
      </li>
    );
  }
}



export default ReviewItem;
