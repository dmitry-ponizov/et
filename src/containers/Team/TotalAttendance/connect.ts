import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { totalAttendanceSelector, totalAttendanceLoadingSelector, totalAttendanceErrorSelector } from '../../../store/team/selectors';
import { getTotalAttendanceTodayAction } from '../../../store/team/actions';
import { setCurrentPageAction } from '../../../store/general/actions';
import { getSessionIdSelector } from '../../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getTotalAttendanceTodayAction,
        setCurrentPageAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const team = state.team;
    return {
        totalAttendance: totalAttendanceSelector(team),
        totalAttendanceLoading: totalAttendanceLoadingSelector(team),
        totalAttendanceError: totalAttendanceErrorSelector(team),
        sessionId: getSessionIdSelector(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);