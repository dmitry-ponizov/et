import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { 
    getTeamInfoAction,
    getTeamMembersAction,
    getEmployeesOnVacationAction,
    getExusedLeavesAction
} from '../../store/team/actions';
import { getTeamSummarySelector, teamSummaryLoadingSelector, teamSummaryErrorSelector, getTeamMembersSelector, teamMembersLoadingSelector, teamMembersErrorSelector, employeesOnVacationSelector, employeesOnVacationLoadingSelector, employeesOnVacationErrorSelector, excusedLeavesTodaySelector, excusedLeavesTodayLoadingSelector, excusedLeavesTodayErrorSelector } from '../../store/team/selectors';
import { getSessionIdSelector, getAuthUserIdSelector } from '../../store/general/selectors';
import { setCurrentPageAction } from '../../store/general/actions';
import { successValidationSelector, getStatusCreateNewRequestSelector, getCreateRequestError, getNewRequestLoadingSelector } from '../../store/requests/selectors';
import { changeNewRequestStatus, resetValidateRequest, setNewRequestAction } from '../../store/requests/actions';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getTeamInfoAction,
        getTeamMembersAction,
        setCurrentPageAction,
        changeNewRequestStatus,
        resetValidateRequest,
        setNewRequestAction,
        getEmployeesOnVacationAction,
        getExusedLeavesAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const team = state.team;
    const requests = state.requests;
    return {
        summary: getTeamSummarySelector(team),
        isLoading: teamSummaryLoadingSelector(team),
        error: teamSummaryErrorSelector(team),
        members: getTeamMembersSelector(team),
        membersLoad: teamMembersLoadingSelector(team),
        membersError: teamMembersErrorSelector(team),
        sessionId: getSessionIdSelector(state),
        successNewRequestValidation: successValidationSelector(requests),
        createRequesStatus: getStatusCreateNewRequestSelector(requests),
        createRequestError: getCreateRequestError(requests),
        authUserId: getAuthUserIdSelector(state),
        createRequestLoading: getNewRequestLoadingSelector(requests),
        employeesOnVacation: employeesOnVacationSelector(team),
        employeesOnVacationLoading: employeesOnVacationLoadingSelector(team),
        employeesOnVacationError: employeesOnVacationErrorSelector(team),
        exusedLeaves: excusedLeavesTodaySelector(team),
        exusedLeavesLoading: excusedLeavesTodayLoadingSelector(team),
        exusedLeavesError: excusedLeavesTodayErrorSelector(team)
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);