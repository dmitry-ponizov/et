import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setCurrentPageAction } from '../../store/general/actions';
import { fetchUsersWithBirthdayAction, fetchNewMembersAction } from '../../store/home/actions';
import { getUsersWithBirthdaySelector, getNewMembersSelector, getUsersWithBirthdayLoadingSelector, getUsersWithBirthdayErrorSelector, getNewMembersLoadingSelector, getNewMembersErrorSelector } from '../../store/home/selectors';
import { getSessionIdSelector, getLocalization } from '../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        setCurrentPageAction,
        fetchUsersWithBirthdayAction,
        fetchNewMembersAction
    },
    dispatch
);

const mapStateToProps = (state: any) => {
    const home = state.home;
    return {
        birthdays: getUsersWithBirthdaySelector(home),
        sessionId: getSessionIdSelector(state),
        lang: getLocalization(state),
        newMembers: getNewMembersSelector(home),
        loadingBirthdays: getUsersWithBirthdayLoadingSelector(home),
        errorBirthDays: getUsersWithBirthdayErrorSelector(home),
        loadingNewMembers: getNewMembersLoadingSelector(home),
        errorNewMembers: getNewMembersErrorSelector(home)
    }
}

export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);