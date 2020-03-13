import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    logoutAction
} from '../../../store/general/actions';

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            logoutAction
        },
        dispatch
    );

export const connected = connect(
    null,
    mapDispatchToProps
);