import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction } from '../../store/general/actions';
import { getMeDataAction, changeAvatarAction, editUserAction, editUserResetAction, setAvatarAction} from '../../store/me/actions';
import { getSessionIdSelector, getAuthUserIdSelector, getLocalization, lodadingCurrentUser } from '../../store/general/selectors';
import { changeNewRequestStatus, fetchRequestsDataAction, cancelRequestsAction } from '../../store/requests/actions';
import { getRequestsDataSelector, getErrorRequestsSelector, getRequestsLoadingSelector  } from '../../store/requests/selectors';
import { meDataSelector, meDataLoadingSelector, meDataErrorSelector, editUserInfoStatusSelector, meLoadingSelector, meErrorSelector, avatarSelector, } from '../../store/me/selectors';
import { userIdAttendanceSelector, getAccrualBalanceSelector, getAvailableBalanceLoadingSelector, getAvailableBalanceErrorSelector, getLoadingProcessedDataSelector, getProcessedDataSelector } from '../../store/users/selector';
import {  getTimeSheetForMonthAction,changeUserIdAttendanceAction, getAvailableBalanceAction, getProcessedDataAction } from '../../store/users/actions';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setCurrentPageAction,
      getMeDataAction,
      changeNewRequestStatus,
      changeAvatarAction,
      editUserAction,
      editUserResetAction,
      setAvatarAction,
      getTimeSheetForMonthAction,
      changeUserIdAttendanceAction,
      fetchRequestsDataAction,
      cancelRequestsAction,
      getAvailableBalanceAction,
      getProcessedDataAction,
    },
    dispatch
);

const mapStateToProps = (state: any) => {
  const me = state.me
  const requests = state.requests
  const users = state.users
  const general = state.general;
    return {
      authUserId: getAuthUserIdSelector(state),
      sessionId: getSessionIdSelector(state),
      user: meDataSelector(me),
      isLoading: meDataLoadingSelector(me),
      error: meDataErrorSelector(me),
      editUserInfo: editUserInfoStatusSelector(me),
      loading: meLoadingSelector(me),
      errorEditUser: meErrorSelector(me),
      avatar: avatarSelector(me),
      userIdAttendance: userIdAttendanceSelector(users),
      requests: getRequestsDataSelector(state),
      requestsLoading: getRequestsLoadingSelector(requests),
      requestsError: getErrorRequestsSelector(requests),
      lang: getLocalization(state),
      availableBalance: getAccrualBalanceSelector(users),
      isLoadingAvailableBalance: getAvailableBalanceLoadingSelector(users),
      errorAvailableBalance: getAvailableBalanceErrorSelector(users),
      processedData: getProcessedDataSelector(users),
      loadingProcessedData: getLoadingProcessedDataSelector(users),
      isLoadingCurrentUser: lodadingCurrentUser(general)
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);