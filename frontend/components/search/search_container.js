import { connect } from 'react-redux';
import Search from './search';
import { selectAllBikes }  from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  bikes: selectAllBikes(state),
  city: state.filters.city
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
