import { connect } from 'react-redux';
import { getNewsfeedData } from './helper';
import { LandingPage }from './component';

const mapStateToProps = (state) => {
  return {
    newsDetails: state.landing.newsFeedData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    newsFeedData: () => dispatch(getNewsfeedData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
