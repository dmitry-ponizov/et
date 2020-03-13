import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { getLoginErrorSelector } from '../../../store/general/selectors';
import { 
  loginUserAction, 
  setCurrentPageAction, 
  setLangAction 
} from '../../../store/general/actions';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      loginUserAction,
      setCurrentPageAction,
      setLangAction
    },
    dispatch
);


const mapStateToProps = (state: any) => {
  const generalState = state.general;
  return {
    error: getLoginErrorSelector(generalState),
  };
};

export const connected = connect(
  mapStateToProps,
    mapDispatchToProps
);