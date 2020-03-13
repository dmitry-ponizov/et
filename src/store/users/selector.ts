import { IUsersState } from './types';
import { isObject } from '../../utils/index';
import { createSelector } from 'reselect'

import moment from 'moment';

export const getUserDataSelector = (state: IUsersState) => {
    if (!state.user || !isObject(state.user.data)) {
        return {}
    }
    return state.user.data;
}


export const getAvatarSelector = (state: IUsersState) => {
    return state.avatar;
}


export const getUserLoadingSelector = (state: IUsersState) => {
    return state.user.loading;
}


export const getCurrentMonthSelector = (state: IUsersState) => {
    return state.attendance.currentMonth;
}

export const getCurrentYearSelector = (state: IUsersState) => {
    return state.attendance.currentYear;
}


export const getDaysSelector = createSelector(getCurrentMonthSelector, getCurrentYearSelector, (month, year) => {
    // Generating all days in current month
    let days = [];
    let currentDay = moment(`${year}-${month}-1`, 'YYYY-M-D');
    do {
        days.push(currentDay);
        currentDay = moment(currentDay).add(1, 'days');
    } while ((currentDay.month() + 1) === month);
    // Add previous day to start
    currentDay = moment(days[0]);
    const SUNDAY = 0;
    const MONDAY = 1;

    if (currentDay.day() !== MONDAY) {
        do {
            currentDay = moment(currentDay).subtract(1, 'days');
            days.unshift(currentDay);
        } while (currentDay.day() !== MONDAY);
    }
    // Add following day to end
    currentDay = moment(days[days.length - 1]);
    if (currentDay.day() !== SUNDAY) {
        do {
            currentDay = moment(currentDay).add(1, 'days');
            days.push(currentDay);
        } while (currentDay.day() !== SUNDAY);
    }

    return days;
})

export const getWeeksSelector = createSelector(getDaysSelector, (days) => {
    let weeks = [];
    let week = [];
    for (let day of days) {
        week.push(day);
        if (week.length === 7) {
            weeks.push(week);
            week = [];
        }
    }
    return weeks;
});


export const getSelectedDateSelector = (state: IUsersState) => {
    return state.attendance.selectedDate;
}

export const getCalendarDataSelector = (state: IUsersState) => {
    if (!state.calendar || !state.calendar.data) {
        return {}
    }
    return state.calendar.data;
}


export const getUserIdSelector = (state: IUsersState) => {
    if (!state.user || !isObject(state.user.data)) {
        return {}
    }
    return state.user.data.id;
}

export const getLoadingCalendarDataSelector = (state: IUsersState) => {
    return state.calendar.loading;
}

export const getUserErrorSelector = (state: IUsersState) => {
    return state.user.error;
}

export const getUserIdForSagaSelector = (state: any) => {
    return state.users.user.data.id;
}

export const getMonthForSagaSelector = (state: any) => {
    return state.users.attendance.currentMonth;
}

export const getYearForSagaSelector = (state: any) => {
    return state.users.attendance.currentYear;
}

export const selectedDateInfoSelector = createSelector(getSelectedDateSelector, getCalendarDataSelector,
    (selectedDate, calendarData) => {
        if (selectedDate) {
            if (calendarData[selectedDate]) {
                return calendarData[selectedDate]
            }
            return false
        }
        return false
})


export const getVacationsData = createSelector(getCalendarDataSelector,
    (calendarData) => {
        let vacations = [];
        for(let data in calendarData) {
            if(calendarData[data].isVacation){
                vacations.push(data)
            }
        }

       return vacations;
})

export const getAccrualBalanceSelector = (state: IUsersState) => {
    return state.availableBalance.data
}

export const getErrorCodesSelector = createSelector(selectedDateInfoSelector,
    (selectedDayInfo) => {
       if(selectedDayInfo && selectedDayInfo.exceptions.length) {
           return selectedDayInfo.exceptions.map((exception:any) => exception.code);
       }
    return null
})

export const getProcessedDataSelector = (state: IUsersState) => {
    return state.processedData.data;
}

export const getLoadingProcessedDataSelector = (state: IUsersState) => {
    return state.processedData.loading;
}

export const getSubordinatesSelector = (state: IUsersState) => {
    return state.subordinates.data;
}

export const getSubordinatesLoading = (state: IUsersState) => {
    return state.subordinates.loading;
}

export const getSubordinatesErrorSelector = (state: IUsersState) => {
    return state.subordinates.error;
}

export const getAvailableBalanceLoadingSelector = (state: IUsersState) => {
    return state.availableBalance.loading;
}

export const getAvailableBalanceErrorSelector = (state: IUsersState) => {
    return state.availableBalance.error;
}
export const userIdAttendanceSelector = (state: IUsersState) => {
    return state.attendance.userId;
}

export const getTotalRowsSelector = (state: IUsersState) => {
    if(state.subordinates && state.subordinates.pager) {
        return state.subordinates.pager.total_rows;
    }
    return null
}

export const getCurrentPageSelector = (state: IUsersState) => {
    if(state.subordinates && state.subordinates.pager) {
        return state.subordinates.pager.current_page;
    }
    return null
}