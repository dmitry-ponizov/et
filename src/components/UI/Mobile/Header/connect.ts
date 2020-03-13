import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { toggleSideBar, getCurrentUserAction, getStationIdAction } from '../../../../store/general/actions';
import { getCurrentUserSelector, getSessionIdSelector, stationIdSelector } from '../../../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        toggleSideBar,
        getCurrentUserAction,
        getStationIdAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const generalState = state.general;
    return {
      currentUser: getCurrentUserSelector(generalState),
      sessionId: getSessionIdSelector(state),
      stationId: stationIdSelector(generalState)
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);