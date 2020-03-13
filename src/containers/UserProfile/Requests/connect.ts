import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { 
  getRequestsDataSelector, 
  getErrorRequestsSelector,
  getPagerRequestsSelector,
} from "../../../store/requests/selectors";

import { 
  sortRequests,
  fetchRequestsDataAction,
  changePageNumberRequestsAction,
  changeFilterDataAction
} from '../../../store/requests/actions';
import { getSessionIdSelector } from '../../../store/general/selectors';
import { getUserDataSelector } from '../../../store/users/selector';
import { getUserDataAction } from '../../../store/users/actions';


const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      sortRequests,
      fetchRequestsDataAction,
      changeFilterDataAction,
      getUserDataAction,
      changePageNumberRequestsAction,
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const users = state.users;
    const requests = state.requests;
    return {
      data: getRequestsDataSelector(state),
      user: getUserDataSelector(users),
      sessionId: getSessionIdSelector(state),
      isLoading: requests.loading,
      error: getErrorRequestsSelector(requests),
      pager: getPagerRequestsSelector(requests),
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);