import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction } from '../../../store/general/actions';
import { getSessionIdSelector } from '../../../store/general/selectors';
import { absentEmployeesListSelector, absentEmployeesListLoadingSelector, absentEmployeesListErrorSelector } from '../../../store/team/selectors';
import { getAbsentEmployeesListAction } from '../../../store/team/actions';


const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getAbsentEmployeesListAction,
        setCurrentPageAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const team = state.team;
    return {
        absentEmployees: absentEmployeesListSelector(team),
        isLoading: absentEmployeesListLoadingSelector(team),
        error: absentEmployeesListErrorSelector(team),
        sessionId: getSessionIdSelector(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);