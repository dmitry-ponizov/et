import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction, toggleSideBar } from '../../store/general/actions';
import { selectorGetCurrentPage, selectorSideBarStatus, getLocalization } from '../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        setCurrentPageAction,
        toggleSideBar,
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const generalState = state.general;
    return {
      currentPage: selectorGetCurrentPage(generalState),
      sideBar: selectorSideBarStatus(generalState),
      lang: getLocalization(state),
    };
  };
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);