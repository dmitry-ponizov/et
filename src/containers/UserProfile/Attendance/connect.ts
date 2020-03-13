import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getVacationsData, getCurrentMonthSelector, getCurrentYearSelector, getWeeksSelector, getSelectedDateSelector, getCalendarDataSelector, getUserIdSelector, getLoadingCalendarDataSelector, selectedDateInfoSelector, getErrorCodesSelector, userIdAttendanceSelector } from '../../../store/users/selector';
import { setCurrentMonthAction, setCurrentYearAction, selectDateAction, resetCalendarDataAction, getTimeSheetForMonthAction } from '../../../store/users/actions';
import { getSessionIdSelector, getLocalization } from '../../../store/general/selectors';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setCurrentMonthAction,
      setCurrentYearAction,
      selectDateAction,
      resetCalendarDataAction,
      getTimeSheetForMonthAction
    },
    dispatch
  );

const mapStateToProps = (state: any) => {
  const users = state.users;
  return {
    currentMonth: getCurrentMonthSelector(users),
    currentYear: getCurrentYearSelector(users),
    weeks: getWeeksSelector(users),
    sessionId: getSessionIdSelector(state),
    calendarData: getCalendarDataSelector(users),
    selectedDate: getSelectedDateSelector(users),
    userId: getUserIdSelector(users),
    loadingCalendarData: getLoadingCalendarDataSelector(users),
    selectedDayInfo: selectedDateInfoSelector(users),
    vacations: getVacationsData(users),
    codes: getErrorCodesSelector(users),
    lang: getLocalization(state),
    userIdAttendance: userIdAttendanceSelector(users)
  };
};
export const connected = connect(
  mapStateToProps,
  mapDispatchToProps
);