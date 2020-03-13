import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { 
    getTeamMembersAction,
} from '../../../../store/team/actions';
import { getTeamMembersSelector, teamMembersLoadingSelector, teamMembersErrorSelector } from '../../../../store/team/selectors';
import { getSessionIdSelector } from '../../../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getTeamMembersAction,
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const team = state.team;
    return {
        members: getTeamMembersSelector(team),
        membersLoad: teamMembersLoadingSelector(team),
        membersError: teamMembersErrorSelector(team),
        sessionId: getSessionIdSelector(state),
    };
};

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
)