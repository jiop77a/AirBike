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
        <figure>
          <img src ={bikeDetail.picture_url} alt={bikeDetail.description} />
        </figure>
      </section>


    );
  }
}

export default BikeDetail;
