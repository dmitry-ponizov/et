import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setNewRequestAction} from '../../../../store/requests/actions';
import { setUserIdAction } from '../../../../store/general/actions';
import {successValidationSelector } from '../../../../store/requests/selectors';
import { getCurrentUserSelector } from '../../../../store/general/selectors';
import { getUserDataSelector } from '../../../../store/users/selector';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        setNewRequestAction,
        setUserIdAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const requests = state.requests;
    const generalState = state.general;
    const users = state.users
    return {
      successNewRequestValidation: successValidationSelector(requests),
      currentUser: getCurrentUserSelector(generalState),
      user: getUserDataSelector(users),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);