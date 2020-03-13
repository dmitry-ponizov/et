import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { toggleSideBar, getCurrentUserAction } from '../../../store/general/actions';
import { getCurrentUserSelector, getSessionIdSelector, getLocalization } from '../../../store/general/selectors';


const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        toggleSideBar,
        getCurrentUserAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const generalState = state.general;
    return {
      currentUser: getCurrentUserSelector(generalState),
      sessionId: getSessionIdSelector(state),
      lang: getLocalization(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);