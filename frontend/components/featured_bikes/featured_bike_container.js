import { connect } from 'react-redux';
import FeaturedBikes from './featured_bikes';
import { selectFeaturedBikes } from '../../reducers/selectors';
import { fetchAllBikes } from '../../actions/bike_actions';
// import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  bikes: selectFeaturedBikes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBikes: () => dispatch(fetchAllBikes())
  // updateFilter: () => dispatch(updateFilter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedBikes);
