import { connect } from 'react-redux';
import FeaturedBikes from './featured_bikes';
import { selectFeaturedBikes } from '../../reducers/selectors';
import { fetchBikes } from '../../actions/bike_actions';

const mapStateToProps = state => ({
  bikes: selectFeaturedBikes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBikes: () => dispatch(fetchBikes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedBikes);
