import {connect} from "react-redux";
import { getUserDataAction } from '../../../../../store/users/actions';
import { bindActionCreators } from 'redux';


const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getUserDataAction
    },
    dispatch
);


// const mapStateToProps = (state: any) => {
//     const users = state.users;
//     return {
//         subordinates: getSubordinatesSelector(users),
//         sessionId: getSessionIdSelector(state),
//         totalRows: getTotalRowsSelector(users),
//         error: getSubordinatesErrorSelector(users),
//         isLoading: getSubordinatesLoading(users),
//     };
// };
export const connected = connect(
    null,
    mapDispatchToProps
);