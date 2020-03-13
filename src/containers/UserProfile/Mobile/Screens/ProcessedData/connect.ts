import {connect} from "react-redux";
import { getProcessedDataSelector, getLoadingProcessedDataSelector } from '../../../../../store/users/selector';
import { getSessionIdSelector, getLocalization } from '../../../../../store/general/selectors';
import { bindActionCreators } from 'redux';
import {getProcessedDataAction } from '../../../../../store/users/actions';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getProcessedDataAction,
    },
    dispatch
);


const mapStateToProps = (state: any) => {
    const users = state.users;
    return {
      processedData: getProcessedDataSelector(users),
      sessionId: getSessionIdSelector(state),
      isLoading: getLoadingProcessedDataSelector(users),
      lang: getLocalization(state)
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);