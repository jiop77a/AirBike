import { connect } from 'react-redux';
import BikeDetail from './bike_detail';
import { fetchBike } from '../../actions/bike_actions';

const mapStateToProps = ({ bikeDetail }) => ({
  bikeDetail
});

const mapDispatchToProps = dispatch => ({
  fetchBike: id => dispatch(fetchBike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BikeDetail);
