import {connect} from "react-redux";
import { getSessionIdSelector } from '../store/general/selectors';

const mapStateToProps = (state: any) => {
    return {
      sessionId: getSessionIdSelector(state),
    };
  };
export const connected = connect(
    mapStateToProps,
    null
);