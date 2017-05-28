import { connect } from 'react-redux';
import FeaturedBikes from './featured_bikes';
import { selectFeaturedBikes } from '../../reducers/selectors';
import { fetchAllBikes } from '../../actions/bike_actions';

const mapStateToProps = state => ({
  bikes: selectFeaturedBikes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBikes: () => dispatch(fetchAllBikes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedBikes);
