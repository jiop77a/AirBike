import { connect } from 'react-redux';
import BikeDetail from './bike_detail';
import { fetchBike, createReview, deleteReview } from '../../actions/bike_actions';

const mapStateToProps = ({ bikeDetail, session }) => ({
  bikeDetail,
  errors: bikeDetail.errors,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchBike: id => dispatch(fetchBike(id)),
  createReview: review => dispatch(createReview(review)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BikeDetail);
