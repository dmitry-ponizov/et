import { GET_USER_DATA, GET_USER_DATA_START, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAIL, SET_CURRENT_MONTH, SET_CURRENT_YEAR, SELECT_DATE_USER_PROFILE, RESET_CALENDAR_DATA, GET_TIMESHEET_FOR_MONTH, GET_TIMESHEET_FOR_MONTH_START, GET_TIMESHEET_FOR_MONTH_SUCCESS, GET_TIMESHEET_FOR_MONTH_FAIL, GET_AVAILABLE_BALANCE, GET_AVAILABLE_BALANCE_SUCCESS, GET_PROCESSED_DATA, GET_PROCESSED_DATA_START, GET_PROCESSED_DATA_SUCCESS, GET_PROCESSED_DATA_FAIL, GET_USER_SUBORDINATES_START, GET_USER_SUBORDINATES_SUCCESS, GET_USER_SUBORDINATES_FAIL, GET_USER_SUBORDINATES, GET_AVAILABLE_BALANCE_START, GET_AVAILABLE_BALANCE_FAIL, SET_PAGER_DATA_SUBORDINATES, SET_USER_ID_ATTENDANDANCE } from '../global/actionTypes';
import { CalendarType, ProcessedDataType, ISubordinates } from './types';


// Get User data
export const getUserDataAction = (params: FormData) => {
    return {
        type: GET_USER_DATA,
        params
    };
};

export const getUserDataStartAction = () => {
    return {
        type: GET_USER_DATA_START
    };
};

export const getUserDataSuccessAction = (payload: Array<object>) => {
    return {
        type: GET_USER_DATA_SUCCESS,
        payload
    };
};

export const getUserDataFailAction = (error: string) => {
    return {
        type: GET_USER_DATA_FAIL,
        error
    };
};

// calendar
export const setCurrentMonthAction = (payload: number) => {
    return { 
        type: SET_CURRENT_MONTH,
        payload
    }
}

export const setCurrentYearAction = (payload: number) => {
    return { 
        type: SET_CURRENT_YEAR,
        payload
    }
}

export const selectDateAction = (payload: string) => {
    return {
        type: SELECT_DATE_USER_PROFILE,
        payload
    }
}

export const resetCalendarDataAction = () => {
    return {
        type: RESET_CALENDAR_DATA
    }
}

// Get calendar data
export const getTimeSheetForMonthAction = (id :string) => { 
    return { 
        type: GET_TIMESHEET_FOR_MONTH,
        id
    }
}

export const getTimeSheetForMonthStartAction = () => { 
    return { 
        type: GET_TIMESHEET_FOR_MONTH_START,
    }
}

export const getTimeSheetForMonthSuccessAction = (payload: CalendarType) => { 
    return { 
        type: GET_TIMESHEET_FOR_MONTH_SUCCESS,
        payload
    }
}

export const getTimeSheetForMonthFailAction = (error: string) => { 
    return { 
        type: GET_TIMESHEET_FOR_MONTH_FAIL,
        error
    }
}

// Get available balance
export const getAvailableBalanceAction = (params: FormData) => {
    return {
        type: GET_AVAILABLE_BALANCE,
        params
    }
}

export const getAvailableBalanceStartAction = () => { 
    return { 
        type: GET_AVAILABLE_BALANCE_START
    }
}

export const getAvailableBalanceSuccessAction = (payload: string) => {
    return {
        type: GET_AVAILABLE_BALANCE_SUCCESS,
        payload
    }
}

export const getAvailableBalanceFailAction = (error: string) => { 
    return { 
        type: GET_AVAILABLE_BALANCE_FAIL,
        error
    }
}

// Get processed data
export const getProcessedDataAction  = (params: { from: string, to: string, userId: string, sessionId: string }) => {
    return {
        type: GET_PROCESSED_DATA,
        params
    }
}

export const getProcessedDataStartAction = () => {
    return {
        type: GET_PROCESSED_DATA_START
    }
}

export const getProcessedDataSuccessAction = (payload: ProcessedDataType) => {
    return {
        type: GET_PROCESSED_DATA_SUCCESS,
        payload
    }
}

export const getProcessedDataFail = (error: string) => {
    return {
        type: GET_PROCESSED_DATA_FAIL,
        error
    }
}


// Get subordinates
export const getSubordinatesAction = (userId: string, pageNumber: string, items: number) => {
    return {
        type: GET_USER_SUBORDINATES,
        userId,
        pageNumber,
        items
    }
}

export const getSubordinatesStartAction = () => {
    return {
        type: GET_USER_SUBORDINATES_START
    }
}

export const getSubordinatesSuccessAction = (payload: ISubordinates[]) => {
    return {
        type: GET_USER_SUBORDINATES_SUCCESS,
        payload
    }
}
export const getSubordinatesFailAction = (error: string) => {
    return {
        type: GET_USER_SUBORDINATES_FAIL,
        error
    }
}

// Pagination
export const setPagerDataSubordinatesAction = (pager: any) => {
    return {
        type: SET_PAGER_DATA_SUBORDINATES,
        pager
    };
};

// Change user id attendance 
export const changeUserIdAttendanceAction = (payload: string) => {
    return {
        type: SET_USER_ID_ATTENDANDANCE,
        payload
    }
}