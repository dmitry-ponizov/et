import {connect} from "react-redux";
import { getSubordinatesSelector, getTotalRowsSelector, getSubordinatesErrorSelector, getSubordinatesLoading, getUserDataSelector } from '../../../../../store/users/selector';
import { getSessionIdSelector } from '../../../../../store/general/selectors';
import { bindActionCreators } from 'redux';
import {getSubordinatesAction } from '../../../../../store/users/actions';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getSubordinatesAction
    },
    dispatch
);


const mapStateToProps = (state: any) => {
    const users = state.users;
    return {
        subordinates: getSubordinatesSelector(users),
        sessionId: getSessionIdSelector(state),
        totalRows: getTotalRowsSelector(users),
        error: getSubordinatesErrorSelector(users),
        isLoading: getSubordinatesLoading(users),
        user: getUserDataSelector(users),
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);