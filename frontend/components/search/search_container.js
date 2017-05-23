import { connect } from 'react-redux';
import Search from './search';
import { selectAllBikes }  from '../../reducers/selectors';
import { fetchBikes } from '../../actions/bike_actions';

const mapStateToProps = state => ({
  bikes: selectAllBikes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBikes: () => dispatch(fetchBikes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
