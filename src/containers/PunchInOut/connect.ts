import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { 
    userPunchSelector, 
    userPunchLoadingSelector, 
    userPunchErrorSelector, 
    getPunchStatusesSelector, 
    getPunchStatusesLoadingSelector, 
    getPunchStatusesErrorSelector, 
    getPunchTypesSelector, 
    getPunchTypesLoadingSelector, 
    getPunchTypesErrorSelector 
} from '../../store/punchInOut/selectors';
import { getUserPunchAction, getPunchStatusesAction, getPunchTypesAction, setPunchStatusId, setPunchTypeId, setUserPunchAction } from '../../store/punchInOut/actions';
import { getStationIdAction } from '../../store/general/actions';
import { getSessionIdSelector, stationIdSelector, getLocalization } from '../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getUserPunchAction,
        getPunchStatusesAction,
        getPunchTypesAction,
        setPunchStatusId,
        setPunchTypeId,
        setUserPunchAction,
        getStationIdAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const punchInOut = state.punchInOut;
    const generalState = state.general;
    return {
        sessionId: getSessionIdSelector(state),
        stationId: stationIdSelector(generalState),
        userPunch: userPunchSelector(punchInOut),
        userPunchLoading: userPunchLoadingSelector(punchInOut),
        userPunchError: userPunchErrorSelector(punchInOut),
        statuses: getPunchStatusesSelector(punchInOut),
        statusesLoading: getPunchStatusesLoadingSelector(punchInOut),
        statusesError: getPunchStatusesErrorSelector(punchInOut),
        types: getPunchTypesSelector(punchInOut),
        typesLoading: getPunchTypesLoadingSelector(punchInOut),
        typesError: getPunchTypesErrorSelector(punchInOut),
        lang: getLocalization(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);