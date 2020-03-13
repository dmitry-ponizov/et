import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction, setLangAction } from '../../store/general/actions';
import { getLocalization } from '../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setCurrentPageAction,
      setLangAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    return {
      lang: getLocalization(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);