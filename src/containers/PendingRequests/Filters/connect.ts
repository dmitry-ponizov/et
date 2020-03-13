import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { 
  getSessionIdSelector, 
  getEmployeesSelector, 
  getEmployeesLoadingSelector, 
  getLocalization
} from '../../../store/general/selectors';
import { 
  fetchEmployeesDataAction 
} from '../../../store/general/actions';
import { 
  getRequestTypesSelector, 
  getRequestTypesLoadingSelector, 
  getUserIdsSelector, 
  getRequestTypeIdsSelector, 
  getStartDateSelector, 
  getEndDateSelector, 
} from '../../../store/pendingRequests/selectors';
import { 
  changeFilterDataAction, 
  clearFilterDataAction, 
  fetchRequestAuthDataAction,
  getRequestTypesAction
} from '../../../store/pendingRequests/actions';


const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
         fetchEmployeesDataAction,
         changeFilterDataAction,
         clearFilterDataAction,
         fetchRequestAuthDataAction,
         getRequestTypesAction
    },
    dispatch
);


const mapStateToProps = (state: any) => {
    const pendingRequests = state.pendingRequests;
    const generalState = state.general;
    return {
      sessionId: getSessionIdSelector(state),
      employees: getEmployeesSelector(generalState),
      requestTypes: getRequestTypesSelector(pendingRequests),
      employeeLoading: getEmployeesLoadingSelector(generalState), 
      typeRequestsLoading: getRequestTypesLoadingSelector(pendingRequests),
      userIds: getUserIdsSelector(pendingRequests),
      requestTypeIds: getRequestTypeIdsSelector(pendingRequests),
      startDate: getStartDateSelector(pendingRequests),
      endDate: getEndDateSelector(pendingRequests),
      lang: getLocalization(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);