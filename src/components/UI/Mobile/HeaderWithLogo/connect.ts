import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {  getCurrentUserAction, getStationIdAction,  getPermissionsAction } from '../../../../store/general/actions';
import { getCurrentUserSelector, getSessionIdSelector, selectorGetCurrentPage, getAuthUserIdSelector, stationIdSelector, getPermissionsSelector } from '../../../../store/general/selectors';
import { successValidationSelector, getStatusCreateNewRequestSelector, getCreateRequestError, getNewRequestLoadingSelector } from '../../../../store/requests/selectors';
import { setNewRequestAction, changeNewRequestStatus, resetValidateRequest  } from '../../../../store/requests/actions';
import { setUserPunchStatusSelector, setUserPunchStatusLoadingSelector, setUserPunchStatusErrorSelector } from '../../../../store/punchInOut/selectors';
import { changePunchStatusAction } from '../../../../store/punchInOut/actions';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getCurrentUserAction,
        setNewRequestAction,
        changeNewRequestStatus,
        resetValidateRequest,
        getStationIdAction,
        changePunchStatusAction,
        getPermissionsAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const generalState = state.general;
    const requests = state.requests;
    const punchInOut = state.punchInOut
    return {
      currentUser: getCurrentUserSelector(generalState),
      sessionId: getSessionIdSelector(state),
      currentPage: selectorGetCurrentPage(generalState),
      successNewRequestValidation: successValidationSelector(requests),
      createRequesStatus: getStatusCreateNewRequestSelector(requests),
      createRequestError: getCreateRequestError(requests),
      createRequestLoading: getNewRequestLoadingSelector(requests),
      authUserId: getAuthUserIdSelector(state),
      stationId: stationIdSelector(generalState),
      createPunchStatus: setUserPunchStatusSelector(punchInOut),
      createPunchLoading: setUserPunchStatusLoadingSelector(punchInOut),
      createPunchError: setUserPunchStatusErrorSelector(punchInOut),
      permissions: getPermissionsSelector(generalState)
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);