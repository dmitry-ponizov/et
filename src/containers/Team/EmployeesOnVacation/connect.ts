import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { onVacationListSelector, onVacationListLoadingSelector, onVacationListErrorSelector } from '../../../store/team/selectors';
import { getEmployeesOnVacationListAction } from '../../../store/team/actions';
import { setCurrentPageAction } from '../../../store/general/actions';
import { getSessionIdSelector } from '../../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getEmployeesOnVacationListAction,
        setCurrentPageAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const team = state.team;
    return {
        onVacation: onVacationListSelector(team),
        isLoading: onVacationListLoadingSelector(team),
        error: onVacationListErrorSelector(team),
        sessionId: getSessionIdSelector(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);