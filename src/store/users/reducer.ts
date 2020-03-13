import { IUsersState } from './types';
import produce, { Draft } from 'immer';
import { GET_USER_DATA_START, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAIL, SET_CURRENT_MONTH, SET_CURRENT_YEAR, SELECT_DATE_USER_PROFILE, RESET_CALENDAR_DATA, GET_TIMESHEET_FOR_MONTH_START, GET_TIMESHEET_FOR_MONTH_SUCCESS, GET_TIMESHEET_FOR_MONTH_FAIL, GET_AVAILABLE_BALANCE_SUCCESS, GET_PROCESSED_DATA_START, GET_PROCESSED_DATA_SUCCESS, GET_PROCESSED_DATA_FAIL, GET_USER_SUBORDINATES_START, GET_USER_SUBORDINATES_SUCCESS, GET_USER_SUBORDINATES_FAIL, GET_AVAILABLE_BALANCE_START, GET_AVAILABLE_BALANCE_FAIL, SET_PAGER_DATA_SUBORDINATES, SET_USER_ID_ATTENDANDANCE } from '../global/actionTypes';
import { getCurrentMonth, getCurrentYear } from '../../utils/index';
import { notFoundPages } from '../../containers/UserProfile/constants';

const initialState = {
    users: {
        data: [],
        loading: false,
        error: null
    },
    user: {
        data: [],
        loading: false,
        error: null
    },
    avatar: '',
    attendance: {
        selectedDate: null,
        currentMonth: getCurrentMonth(),
        currentYear: getCurrentYear(),
        userId: ''
    },
    calendar: {
        data: null,
        loading: false,
        error: null
    },
    availableBalance: {
        data: null,
        loading: false,
        error: null
    },
    processedData: {
        data: null,
        loading: false,
        error: null
    },
    subordinates: {
        data: [],
        loading: false,
        error: null,
        pager: null,
    }
};


const getUserDataStart = (state: IUsersState) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.user.loading = true;
        draft.user.error = null;
    });
};

const getUserDataSuccess = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.user.loading = false;
        draft.user.error = null;
        draft.user.data = action.payload;
    });
};

const getUserDataFail = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.user.loading = false;
        draft.user.error = action.error;
    });
};

const setCurrentMonth = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.attendance.currentMonth = action.payload;
        draft.attendance.selectedDate = null;
    });
};

const setCurrentYear = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.attendance.currentYear = action.payload;
        draft.attendance.selectedDate = null;
    });
};

const selectDate = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.attendance.selectedDate = action.payload;
    });
};

const setUserIdAttendance = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.attendance.userId = action.payload;
    });
};


const resetCalendarData = (state: IUsersState) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.attendance.selectedDate = null;
        draft.attendance.currentMonth = getCurrentMonth();
        draft.attendance.currentYear = getCurrentYear();
    });
};

const setTimesheetForMonthStart = (state: IUsersState) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.calendar.loading = true;
        draft.calendar.error = null;
    });
};

const setTimesheetForMonthSuccess = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.calendar.loading = false;
        draft.calendar.error = null;
        draft.calendar.data = action.payload;
    });
};

const setTimesheetForMonthFail = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.calendar.loading = false;
        draft.calendar.error = action.error;
    });
};

const setAvailableBalanceStart = (state: IUsersState) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.availableBalance.loading = true;
        draft.availableBalance.error = null;
    });
};

const setAvailableBalance = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.availableBalance.data = action.payload;
        draft.availableBalance.loading = false;
        draft.availableBalance.error = null;
    });
};


const setAvailableBalanceFail = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.availableBalance.loading = false;
        draft.availableBalance.error = action.error;
    });
};

const setProcessedDataStart = (state: IUsersState) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.processedData.loading = true;
        draft.processedData.error = null;
    });
};

const setProcessedDataSuccess = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.processedData.loading = false;
        draft.processedData.error = null;
        draft.processedData.data = action.payload;
    });
};
const setProcessedDataFail = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.processedData.loading = false;
        draft.processedData.error = action.error;
    });
};

const setSubordinatesStart = (state: IUsersState) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.subordinates.loading = true;
        draft.subordinates.error = null;
    });
};

const setSubordinatesSuccess = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.subordinates.loading = false;
        draft.subordinates.error = null;
        draft.subordinates.data = action.payload;
    });
};

const setSubordinatesFail = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.subordinates.loading = false;
        draft.subordinates.error = action.error;
        draft.subordinates.data = [];
        draft.subordinates.pager = notFoundPages
    });
};

const setPagerDataSubordinates = (state: IUsersState, action: any) => {
    return produce(state, (draft: Draft<IUsersState>) => {
        draft.subordinates.pager = action.pager;
    });
};

const usersReducer = (state: IUsersState = initialState, action: any) => {
    switch (action.type) {
        case GET_USER_DATA_START:
            return getUserDataStart(state);
        case GET_USER_DATA_SUCCESS: 
            return getUserDataSuccess(state, action);
        case GET_USER_DATA_FAIL: 
            return getUserDataFail(state, action)
        case SET_CURRENT_MONTH: 
            return setCurrentMonth(state, action)
        case SET_CURRENT_YEAR: 
            return setCurrentYear(state, action)
        case SELECT_DATE_USER_PROFILE: 
            return selectDate(state, action)
        case RESET_CALENDAR_DATA: 
            return resetCalendarData(state)
        case GET_TIMESHEET_FOR_MONTH_START: 
            return setTimesheetForMonthStart(state)
        case GET_TIMESHEET_FOR_MONTH_SUCCESS: 
            return setTimesheetForMonthSuccess(state, action)
        case GET_TIMESHEET_FOR_MONTH_FAIL: 
            return setTimesheetForMonthFail(state, action)
        case GET_AVAILABLE_BALANCE_START: 
            return setAvailableBalanceStart(state)
        case GET_AVAILABLE_BALANCE_SUCCESS: 
            return setAvailableBalance(state, action)
        case GET_AVAILABLE_BALANCE_FAIL: 
            return setAvailableBalanceFail(state, action)
        case GET_PROCESSED_DATA_START:
            return setProcessedDataStart(state)
        case GET_PROCESSED_DATA_SUCCESS:
            return setProcessedDataSuccess(state, action)
        case GET_PROCESSED_DATA_FAIL:
            return setProcessedDataFail(state, action)
        case GET_USER_SUBORDINATES_START: 
            return setSubordinatesStart(state)
        case GET_USER_SUBORDINATES_SUCCESS:
            return setSubordinatesSuccess(state, action)
        case GET_USER_SUBORDINATES_FAIL:
            return setSubordinatesFail(state, action)
        case SET_PAGER_DATA_SUBORDINATES: 
            return setPagerDataSubordinates(state, action)
        case SET_USER_ID_ATTENDANDANCE:
            return setUserIdAttendance(state, action)
        default: return state;
    }
};

export default usersReducer;
