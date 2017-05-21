import React, { Component } from 'react';

class BikeDetail extends Component {
  componentDidMount() {
    this.props.fetchBike(parseInt(this.props.match.params.bikeId));
  }

  componentWillReceiveProps(nextProps) {
    if (parseInt(this.props.match.params.bikeId) !==  parseInt(nextProps.match.params.bikeId)) {
      this.props.fetchBike(parseInt(nextProps.match.params.bikeId));
    }
  }

  render() {
    const { bikeDetail } = this.props;
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

          </div>
        </section>
        <section className="reviews-and form">
          <div className="review-list">
            <h2>Reviews</h2>
            <ul className="review-items">
              <li>Lorem ipsum dolor sit amet, </li>
              <li>consectetur adipisicing elit, </li>
              <li>sed do eiusmod tempor incididunt ut </li>
              <li>labore et dolore magna aliqua. Ut </li>
            </ul>
          </div>
          <div className="review-form">

          </div>
        </section>
      </section>


    );
  }
}

export default BikeDetail;
