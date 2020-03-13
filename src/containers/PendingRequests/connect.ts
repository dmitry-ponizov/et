import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction } from '../../store/general/actions';
import { getSessionIdSelector, getCurrentUserSelector, getAuthUserIdSelector, getLocalization } from '../../store/general/selectors';
import { 
  getAuthRequesGenericDataSelector, 
  getAuthRequestRequestData, 
  getErrorAuthRequestsSelector, 
  getPagerAuthRequestsSelector, 
  getRefreshLoadingSelector,
  getRequestDataSelector,
  getRequestLoadingSelector,
  getRequestErrorSelector,
  getAuthLoadingSelector
} from '../../store/pendingRequests/selectors';
import { 
  sortAuthRequest, 
  fetchRequestAuthDataAction,
  refreshAuthRequest,
  changePageNumberAuthRequestAction,
  getRequestAction,
  authtorizeRequestAction,
  changeFilterDataAction,
  changeUserIdPendingRequestsAction,
  resetAutorizeAction
} from '../../store/pendingRequests/actions';
import { getUserDataSelector } from "../../store/users/selector";
import { getApproveStatusSelector, getDeclineStatusSelector, autorizeDeclineErrorSelector, getPendingRequestUserIdSelector } from '../../store/pendingRequests/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setCurrentPageAction,
      sortAuthRequest,
      fetchRequestAuthDataAction,
      refreshAuthRequest,
      changePageNumberAuthRequestAction,
      getRequestAction,
      authtorizeRequestAction,
      changeFilterDataAction,
      changeUserIdPendingRequestsAction,
      resetAutorizeAction
    },
    dispatch
);


const mapStateToProps = (state: any) => {
  const pendingRequests = state.pendingRequests;
  const users = state.users;
  const general = state.general
  return {
    sessionId: getSessionIdSelector(state),
    data: getAuthRequesGenericDataSelector(state),
    requestData: getAuthRequestRequestData(state),
    isLoading: pendingRequests.loading,
    error: getErrorAuthRequestsSelector(pendingRequests),
    pager: getPagerAuthRequestsSelector(pendingRequests),
    refreshLoading: getRefreshLoadingSelector(pendingRequests),
    request: getRequestDataSelector(pendingRequests),
    requestLoading: getRequestLoadingSelector(pendingRequests),
    requestError: getRequestErrorSelector(pendingRequests),
    authtorizationLoading: getAuthLoadingSelector(pendingRequests),
    user: getUserDataSelector(users),
    currentUser: getCurrentUserSelector(general),
    approved: getApproveStatusSelector(pendingRequests),
    declined: getDeclineStatusSelector(pendingRequests),
    approveDeclineError: autorizeDeclineErrorSelector(pendingRequests),
    authUserId: getAuthUserIdSelector(state),
    pendingRequestUserId: getPendingRequestUserIdSelector(pendingRequests),
    lang: getLocalization(state),
  };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
); 