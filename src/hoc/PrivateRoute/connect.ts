import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction } from '../../store/general/actions';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        setCurrentPageAction,
    },
    dispatch
);

export const connected = connect(
    null,
    mapDispatchToProps
);