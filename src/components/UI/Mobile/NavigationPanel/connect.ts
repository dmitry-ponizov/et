import {connect} from "react-redux";
import { selectorGetCurrentPage } from '../../../../store/general/selectors';

const mapStateToProps = (state: any) => {
    const generalState = state.general;
    return {
        currentPage: selectorGetCurrentPage(generalState),
    };
};
export const connected = connect(
    mapStateToProps,
    null
);