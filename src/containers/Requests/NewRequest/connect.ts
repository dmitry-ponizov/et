import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { 
  getRequestTypesSelector,
  getDirectManagerSelector,
  getShiftsRequestSelector,
  getValidateErrorSelector,
  getValidateLoadingSelector,
  getAbsencePoliciesSelector,
  getAbsencePoliciesLoadingSelector,
  getAbsencePoliciesErrorSelector,
  getUserShiftsSelector,
  getHourlyAbsencePoliciesSelector,
  getHourlyAbsencePoliciesLoadingSelector,
  getHourlyAbsencePoliciesErrorSelector,
  getUserSchedulesSelector,
  getUserSchedulesLoadingSelector,
  getAnotherUsersSelector,
  getAnotherUsersLoadingSelector,
  getUserShiftsLoadingSelector
} from "../../../store/requests/selectors";

import { 
    getRequestTypesAction,
    getRequestDirectManager,
    getRequestShiftsAction,
    validateRequestAction,
  setNewRequestRequestDataAction,
  getAbsencePoliciesAction,
  getUserShiftsForVacationAction,
  getHourlyAbsencePoliciesAction,
  getUserSchedulesByRequestTypeAction,
  getAnotherUsersRequestAction
} from '../../../store/requests/actions';
import { getSessionIdSelector, getEmployeesLoadingSelector, getLocalization, getUserIdSelector, getEmployeesPagerSelector, getAuthUserIdSelector } from '../../../store/general/selectors';
import { getEmployeesSelector } from '../../../store/general/selectors';
import { fetchEmployeesDataAction, setUserIdAction } from '../../../store/general/actions';
import { getRequestTypesLoadingSelector, successValidationSelector } from '../../../store/requests/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getRequestTypesAction,
        fetchEmployeesDataAction,
        setUserIdAction,
        getRequestDirectManager,
        getRequestShiftsAction,
        validateRequestAction,
        setNewRequestRequestDataAction,
        getAbsencePoliciesAction,
        getUserShiftsForVacationAction,
        getHourlyAbsencePoliciesAction,
        getUserSchedulesByRequestTypeAction,
        getAnotherUsersRequestAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const requests = state.requests;
    const generalState = state.general;
    return {
      sessionId: getSessionIdSelector(state),
      requestTypes: getRequestTypesSelector(requests),
      employees: getEmployeesSelector(generalState),
      userId: getUserIdSelector(state),
      typeRequestsLoading: getRequestTypesLoadingSelector(requests),
      employeeLoading: getEmployeesLoadingSelector(generalState),
      directManager: getDirectManagerSelector(requests),
      directManagerLoading: requests.directManager.loading,
      shifts: getShiftsRequestSelector(requests),
      shiftsLoading: requests.shifts.loading,
      validateError: getValidateErrorSelector(requests),
      validateLoading: getValidateLoadingSelector(requests),
      absencePolicies: getAbsencePoliciesSelector(requests),
      absencePoliciesLoading: getAbsencePoliciesLoadingSelector(requests),
      absencePoliciesError: getAbsencePoliciesErrorSelector(requests),
      userShifts: getUserShiftsSelector(requests),
      userShiftsLoading: getUserShiftsLoadingSelector(requests),
      hourlyAbsencePolicies: getHourlyAbsencePoliciesSelector(requests),
      hourlyAbsencePoliciesLoading: getHourlyAbsencePoliciesLoadingSelector(requests),
      hourlyAbsencePoliciesError: getHourlyAbsencePoliciesErrorSelector(requests),
      userSchedules: getUserSchedulesSelector(requests),
      userScheduleLoading: getUserSchedulesLoadingSelector(requests),
      anotherUsers: getAnotherUsersSelector(requests),
      anotherUsersLoading: getAnotherUsersLoadingSelector(requests),
      lang: getLocalization(state),
      successNewRequestValidation: successValidationSelector(requests),
      employeesPager: getEmployeesPagerSelector(generalState),
      authUserId: getAuthUserIdSelector(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);