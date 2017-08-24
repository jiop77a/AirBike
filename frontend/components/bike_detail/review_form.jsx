import React from 'react';
import { merge }  from 'lodash';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 10,
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
 }

   handleSubmit(e) {
    e.preventDefault();
    const bike_id = parseInt(this.props.bikeId)
    const user_id = parseInt(this.props.user.id)
    const review = merge({}, this.state, {bike_id}, {user_id});
    this.props.createReview({review}).then(
      () => this.setState({
        rating: 10,
        body: "",
      })
    ).then(() => this.props.clearErrors());
  }

  clear() {
    this.props.clearErrors();
  }

  render() {
    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <div className="review-form-rating">
          <label>Rating: </label>
          <input
            type="number"
            min="1"
            max="10"
            value={this.state.rating}
            onChange={this.update("rating")}
            />
        </div>
        <div className="review-form-comment">
          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
        </div>
        <button className="promo-button">Submit</button>
      </form>
    );
  }
}

export default ReviewForm;
