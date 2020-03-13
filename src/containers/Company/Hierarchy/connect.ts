import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction } from '../../../store/general/actions';
import { getAuthUserIdSelector, getSessionIdSelector, getLocalization } from '../../../store/general/selectors';
import { getDivisionsAction, getDeptarmentsAction } from '../../../store/company/actions';
import { selectorDivisionsData, selectorDivisionsLoading, selectorDivisionsError, selectorDepartmentsData, selectorDepartmentsLoading, selectorDepartmentsError } from "../../../store/company/selectors";

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setCurrentPageAction,
      getDivisionsAction,
      getDeptarmentsAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const companyStore = state.company
    return {
      authUserId: getAuthUserIdSelector(state),
      divisions: selectorDivisionsData(companyStore),
      divisionsIsLoading: selectorDivisionsLoading(companyStore),
      divisionsError: selectorDivisionsError(companyStore),
      departments: selectorDepartmentsData(companyStore),
      departmentsIsLoading: selectorDepartmentsLoading(companyStore),
      departmentsError: selectorDepartmentsError(companyStore),
      sessionId: getSessionIdSelector(state),
      lang: getLocalization(state)
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);