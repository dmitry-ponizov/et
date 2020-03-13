import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction, setUserIdAction } from '../../store/general/actions';

import { 
  getUserDataSelector, 
  getAvatarSelector, 
  getUserLoadingSelector, 
  getUserErrorSelector, 
  getAccrualBalanceSelector,
  getProcessedDataSelector,
  getLoadingProcessedDataSelector,
  getSubordinatesSelector,
  getSubordinatesLoading,
  getSubordinatesErrorSelector,
  getAvailableBalanceLoadingSelector,
  getAvailableBalanceErrorSelector
 } from '../../store/users/selector';
import { getUserDataAction, getAvailableBalanceAction, getProcessedDataAction,getSubordinatesAction, getTimeSheetForMonthAction, changeUserIdAttendanceAction  } from '../../store/users/actions';
import { getSessionIdSelector, getLocalization, getAuthUserIdSelector } from '../../store/general/selectors';
import { changeFilterDataAction, setNewRequestAction, resetValidateRequest, changeNewRequestStatus } from '../../store/requests/actions';
import { successValidationSelector, getStatusCreateNewRequestSelector, getCreateRequestError, getNewRequestLoadingSelector } from '../../store/requests/selectors';
import { getTotalRowsSelector, getCurrentPageSelector, userIdAttendanceSelector } from '../../store/users/selector';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setCurrentPageAction,
      getUserDataAction,
      getAvailableBalanceAction,
      changeFilterDataAction,
      setNewRequestAction,
      resetValidateRequest,
      setUserIdAction,
      getProcessedDataAction,
      getSubordinatesAction,
      getTimeSheetForMonthAction,
      changeNewRequestStatus,
      changeUserIdAttendanceAction
    },
    dispatch
);


const mapStateToProps = (state: any) => {
    const users = state.users;
    const requests = state.requests
    return {
      user: getUserDataSelector(users),
      sessionId: getSessionIdSelector(state),
      avatar: getAvatarSelector(users),
      isLoading: getUserLoadingSelector(users),
      error: getUserErrorSelector(users),
      availableBalance: getAccrualBalanceSelector(users),
      isLoadingAvailableBalance: getAvailableBalanceLoadingSelector(users),
      errorAvailableBalance: getAvailableBalanceErrorSelector(users),
      successNewRequestValidation: successValidationSelector(requests),
      processedData: getProcessedDataSelector(users),
      loadingProcessedData: getLoadingProcessedDataSelector(users),
      lang: getLocalization(state),
      subordinates: getSubordinatesSelector(users),
      subordinatesLoading: getSubordinatesLoading(users),
      subordinatesError: getSubordinatesErrorSelector(users),
      totalRows: getTotalRowsSelector(users),
      currentPage: getCurrentPageSelector(users),
      createRequesStatus: getStatusCreateNewRequestSelector(requests),
      createRequestError: getCreateRequestError(requests),
      createRequestLoading: getNewRequestLoadingSelector(requests),
      authUserId: getAuthUserIdSelector(state),
      userIdAttendance: userIdAttendanceSelector(users)
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);