import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { exusedLeavesListErrorSelector, exusedLeavesListSelector, exusedLeavesListLoadingSelector } from '../../../store/team/selectors';
import { getExusedLeavesListAction } from '../../../store/team/actions';
import { setCurrentPageAction } from '../../../store/general/actions';
import { getSessionIdSelector } from '../../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getExusedLeavesListAction,
        setCurrentPageAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const team = state.team;
    return {
        exusedLeaves: exusedLeavesListSelector(team),
        isLoading: exusedLeavesListLoadingSelector(team),
        error: exusedLeavesListErrorSelector(team),
        sessionId: getSessionIdSelector(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);