import {connect} from "react-redux";
import { getUserDataSelector, getAccrualBalanceSelector } from '../../../../../store/users/selector';
import { getAvailableBalanceAction } from '../../../../../store/users/actions'
import { bindActionCreators } from 'redux';
import { getSessionIdSelector } from '../../../../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getAvailableBalanceAction,
    },
    dispatch
);


const mapStateToProps = (state: any) => {
    const users = state.users;
    return {
      user: getUserDataSelector(users),
      availableBalance: getAccrualBalanceSelector(users),
      sessionId: getSessionIdSelector(state),
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);