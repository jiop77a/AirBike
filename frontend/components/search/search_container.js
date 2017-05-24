import { connect } from 'react-redux';
import Search from './search';
import { selectAllBikes }  from '../../reducers/selectors';
import { searchBikes, fetchBikes } from '../../actions/bike_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  bikes: selectAllBikes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBikes: () => dispatch(fetchBikes()),
  searchBikes: (data) => dispatch(searchBikes(data)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
