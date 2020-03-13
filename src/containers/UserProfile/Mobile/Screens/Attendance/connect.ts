import {connect} from "react-redux";
import { getLocalization } from '../../../../../store/general/selectors';
import { 
    getCurrentMonthSelector, 
    getUserDataSelector, 
    getWeeksSelector,
    getCalendarDataSelector, 
    getLoadingCalendarDataSelector,
    getSelectedDateSelector
} from '../../../../../store/users/selector';
import { bindActionCreators } from 'redux';
import { setCurrentMonthAction, getTimeSheetForMonthAction, selectDateAction, changeUserIdAttendanceAction, setCurrentYearAction } from '../../../../../store/users/actions';
import { selectedDateInfoSelector, getVacationsData, getErrorCodesSelector, userIdAttendanceSelector, getCurrentYearSelector } from '../../../../../store/users/selector';


const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        setCurrentMonthAction,
        getTimeSheetForMonthAction,
        selectDateAction,
        changeUserIdAttendanceAction,
        setCurrentYearAction,
    },
    dispatch
);


const mapStateToProps = (state: any) => {
    const users = state.users;
    return {
        lang: getLocalization(state),
        currentMonth: getCurrentMonthSelector(users),
        user: getUserDataSelector(users),
        selectedDate: getSelectedDateSelector(users),
        weeks: getWeeksSelector(users),
        calendarData: getCalendarDataSelector(users),
        loadingCalendarData: getLoadingCalendarDataSelector(users),
        selectedDayInfo: selectedDateInfoSelector(users),
        vacations: getVacationsData(users),
        codes: getErrorCodesSelector(users),
        userIdAttendance: userIdAttendanceSelector(users),
        currentYear: getCurrentYearSelector(users),
    };
};
export const connected = connect(
    mapStateToProps,
    mapDispatchToProps
);