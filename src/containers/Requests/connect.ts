import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction, toggleSideBar } from '../../store/general/actions';
import { 
  getRequestsDataSelector, 
  getRequestsRequestDataSelector,
  getErrorRequestsSelector,
  getPagerRequestsSelector,
  getRefreshLoading,
  successValidationSelector,
  getNewRequestLoadingSelector,
  getCancelRequestLoadingSelector,
  getRequestDataSelector,
  getRequestLoadingSelector,
  getRequestErrorSelector,
  getAuthHistorySelector,
  getAuthHistoryLoadingSelector,
  getAuthHistoryErrorSelector
} from "../../store/requests/selectors";

import { 
  getGenericDataRequestsAction, 
  sortRequests,
  fetchRequestsDataAction,
  setGenericDataRequestsAction,
  refreshRequests,
  changePageNumberRequestsAction,
  setNewRequestAction,
  resetValidateRequest,
  cancelRequestsAction,
  getRequestAction,
  resetCancelRequestAction
} from '../../store/requests/actions';
import { getSessionIdSelector, selectorSideBarStatus, getAuthUserIdSelector, getLocalization } from '../../store/general/selectors';
import { getCancelRequestErrorSelector, getRequestsLoadingSelector, cancelRequestSuccessSelector } from '../../store/requests/selectors';


const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setCurrentPageAction,
      getGenericDataRequestsAction,
      sortRequests,
      fetchRequestsDataAction,
      setGenericDataRequestsAction,
      refreshRequests,
      changePageNumberRequestsAction,
      toggleSideBar,
      setNewRequestAction,
      resetValidateRequest,
      cancelRequestsAction,
      getRequestAction,
      resetCancelRequestAction,
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const requests = state.requests;
    const generalState = state.general;
    return {
      data: getRequestsDataSelector(state),
      requestData: getRequestsRequestDataSelector(state),
      isLoading: getRequestsLoadingSelector(requests),
      error: getErrorRequestsSelector(requests),
      pager: getPagerRequestsSelector(requests),
      refreshLoading: getRefreshLoading(requests),
      sessionId: getSessionIdSelector(state),
      sideBar: selectorSideBarStatus(generalState),
      successNewRequestValidation: successValidationSelector(requests),
      cancelRequestError: getCancelRequestErrorSelector(requests),
      setNewRequestLoading: getNewRequestLoadingSelector(requests),
      cancelRequestLoading: getCancelRequestLoadingSelector(requests),
      request: getRequestDataSelector(requests),
      requestLoading: getRequestLoadingSelector(requests),
      requestError: getRequestErrorSelector(requests),
      authHistory: getAuthHistorySelector(requests),
      authHistoryLoading: getAuthHistoryLoadingSelector(requests),
      authHistoryError: getAuthHistoryErrorSelector(requests),
      authUserId: getAuthUserIdSelector(state),
      lang: getLocalization(state),
      cancelSuccess: cancelRequestSuccessSelector(requests),
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);