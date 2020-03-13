import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {  getCurrentUserAction, getStationIdAction, getPermissionsAction } from '../../store/general/actions';
import { getCurrentUserSelector, getSessionIdSelector, selectorGetCurrentPage, getAuthUserIdSelector, stationIdSelector, getLocalization, getPermissionsSelector, getCurrentUserError } from '../../store/general/selectors';
import { successValidationSelector, getStatusCreateNewRequestSelector, getCreateRequestError, getNewRequestLoadingSelector } from '../../store/requests/selectors';
import { setNewRequestAction, changeNewRequestStatus, resetValidateRequest,  } from '../../store/requests/actions';
import { setUserIdAction } from '../../store/general/actions';
import { avatarSelector } from '../../store/me/selectors';
import { userPunchSelector, setUserPunchStatusSelector, setUserPunchStatusLoadingSelector, setUserPunchStatusErrorSelector } from '../../store/punchInOut/selectors';
import { changePunchStatusAction } from '../../store/punchInOut/actions';
import { CommonType } from '../../constants/common';


const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getCurrentUserAction,
        setNewRequestAction,
        changeNewRequestStatus,
        resetValidateRequest,
        setUserIdAction,
        getStationIdAction,
        changePunchStatusAction,
        getPermissionsAction
    },
    dispatch
);


const mapStateToProps = (state: CommonType) => {
    const generalState = state.general;
    const requests = state.requests
    const me = state.me;
    const punchInOut = state.punchInOut
    return {
      currentUser: getCurrentUserSelector(generalState),
      currentUserError: getCurrentUserError(generalState),
      sessionId: getSessionIdSelector(state),
      currentPage: selectorGetCurrentPage(generalState),
      successNewRequestValidation: successValidationSelector(requests),
      createRequesStatus: getStatusCreateNewRequestSelector(requests),
      createRequestError: getCreateRequestError(requests),
      createRequestLoading: getNewRequestLoadingSelector(requests),
      authUserId: getAuthUserIdSelector(state),
      avatar: avatarSelector(me),
      stationId: stationIdSelector(generalState),
      userPunch: userPunchSelector(punchInOut),
      createPunchStatus: setUserPunchStatusSelector(punchInOut),
      createPunchLoading: setUserPunchStatusLoadingSelector(punchInOut),
      createPunchError: setUserPunchStatusErrorSelector(punchInOut),
      lang: getLocalization(state),
      permissions: getPermissionsSelector(generalState)
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);