import { connect } from 'react-redux';
import { getNewsfeedData } from '../../store/actions/landingPageAction';
import { LandingPage }from './component';

const mapStateToProps = (state) => {
  return {
    newsDetails: state.landingPageReducer.newsFeedData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    newsFeedData: () => dispatch(getNewsfeedData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
