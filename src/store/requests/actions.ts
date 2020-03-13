import { CHANGE_NEW_REQUEST_STATUS, RESET_CANCEL_REQUEST } from '../global/actionTypes';
import { 
    GET_USER_SHIFTS_FOR_VACATION, 
    GET_USER_SHIFTS_FOR_VACATION_START, 
    GET_USER_SHIFTS_FOR_VACATION_SUCCESS, 
    GET_USER_SHIFTS_FOR_VACATION_FAIL, 
    GET_HOURLY_ABSENCE_POLICIES, 
    GET_HOURLY_ABSENCE_POLICIES_START, 
    GET_HOURLY_ABSENCE_POLICIES_SUCCESS, 
    GET_HOURLY_ABSENCE_POLICIES_FAIL, 
    GET_USER_SCHEDULES_BY_REQUEST_TYPE, 
    GET_USER_SCHEDULES_BY_REQUEST_TYPE_START, 
    GET_USER_SCHEDULES_BY_REQUEST_TYPE_SUCCESS, 
    GET_USER_SCHEDULES_BY_REQUEST_TYPE_FAIL, 
    GET_ANOTHER_USERS_REQUEST, 
    GET_ANOTHER_USERS_REQUEST_START, 
    GET_ANOTHER_USERS_REQUEST_SUCCESS, 
    GET_ANOTHER_USERS_REQUEST_FAIL, 
} from '../global/actionTypes';
import { 
    GET_ABSENCE_POLICIES, 
    GET_ABSENCE_POLICIES_START, 
    GET_ABSENCE_POLICIES_SUCCESS,
    GET_ABSENCE_POLICIES_FAIL, 
    RESET_VALIDATE_REQUEST, 
    CANCEL_REQUESTS, 
    CANCEL_REQUESTS_START, 
    CANCEL_REQUESTS_SUCCESS, 
    CANCEL_REQUESTS_FAIL, 
    CHANGE_FILTER_DATA_REQUESTS, 
    CLEAR_FILTER_DATA, 
    GET_REQUEST_STATUSES, 
    GET_REQUEST_STATUSES_START, 
    GET_REQUEST_STATUSES_SUCCESS, 
    GET_REQUEST, GET_REQUEST_START, 
    GET_REQUEST_SUCCESS, 
    GET_REQUEST_FAIL, 
    GET_REQUEST_AUTH_HISTORY, 
    GET_REQUEST_AUTH_HISTORY_START, 
    GET_REQUEST_AUTH_HISTORY_SUCCESS, 
    GET_REQUEST_AUTH_HISTORY_FAIL,
    GET_REQUEST_TYPES, 
    GET_REQUEST_TYPES_START, 
    GET_REQUEST_TYPES_FAIL, 
    GET_REQUEST_TYPES_SUCCESS, 
    GET_REQUEST_DIRECT_MANAGER, 
    GET_REQUEST_DIRECT_MANAGER_START, 
    GET_REQUEST_DIRECT_MANAGER_SUCCESS, 
    GET_REQUEST_DIRECT_MANAGER_FAIL, 
    GET_REQUEST_SHIFTS, 
    GET_REQUEST_SHIFTS_START, 
    GET_REQUEST_SHIFTS_SUCCESS, 
    GET_REQUEST_SHIFTS_FAIL, 
    GET_REPORT_TO_USER_REQUESTS, 
    GET_REPORT_TO_USER_REQUESTS_START, 
    GET_REPORT_TO_USER_REQUESTS_SUCCESS, 
    GET_REPORT_TO_USER_REQUESTS_FAIL, 
    VALIDATE_REQUEST, 
    VALIDATE_REQUEST_START, 
    VALIDATE_REQUEST_SUCCESS, 
    VALIDATE_REQUEST_FAIL,
    FETCH_REQUESTS_DATA,
    FETCH_REQUESTS_DATA_START,
    FETCH_REQUESTS_DATA_SUCCESS,
    FETCH_REQUESTS_DATA_FAIL,
    GET_GENERIC_DATA_REQUESTS_START,
    GET_GENERIC_DATA_REQUESTS_SUCCESS,
    GET_GENERIC_DATA_REQUESTS_FAIL,
    GET_GENERIC_REQUESTS,
    SET_GENERIC_DATA_REQUESTS_FAIL,
    SET_GENERIC_DATA_REQUESTS,
    SET_REQUEST_REQUESTS_DATA,
    SET_PAGER_DATA_REQUESTS,
    CHANGE_PAGE_NUMBER_REQUESTS,
    REFRESH_LOADING_REQUESTS,
    SORT_REQUESTS,
    SET_NEW_REQUEST,
    SET_NEW_REQUEST_START,
    SET_NEW_REQUEST_SUCCESS,
    SET_NEW_REQUEST_FAIL,
    SET_NEW_REQUEST_REQUEST_DATA
} from '../global/actionTypes';
// Generic data requests
export const getGenericDataRequestsAction = (params: any) => {
    return {
        type: GET_GENERIC_REQUESTS,
        params
    };
};
export const getGenericDataRequestsStartAction = () => {
    return {
        type: GET_GENERIC_DATA_REQUESTS_START
    };
};

export const getGenericDataRequestsSuccessAction = (payload: any) => {
    return {
        type: GET_GENERIC_DATA_REQUESTS_SUCCESS,
        payload
    };
};

export const getGenericDataRequestsFailAction = (error: any) => {
    return {
        type: GET_GENERIC_DATA_REQUESTS_FAIL,
        error
    };
};


export const setGenericDataRequestsAction = (params: any) => {
    return {
        type: SET_GENERIC_DATA_REQUESTS,
        params
    };
};

export const setGenericDataRequestsFailAction = (payload: any) => {
    return {
        type: SET_GENERIC_DATA_REQUESTS_FAIL,
        payload
    };
};

// Fetch requests
export const fetchRequestsDataAction = (params: FormData) => {
    return {
        type: FETCH_REQUESTS_DATA,
        params
    };
};

export const fetchRequestsDataStartAction = () => {
    return {
        type: FETCH_REQUESTS_DATA_START
    };
};

export const fetchRequestsDataSuccessAction = (payload: any) => {
    return {
        type: FETCH_REQUESTS_DATA_SUCCESS,
        payload
    };
};

export const fetchRequestsDataFailAction = (payload: any) => {
    return {
        type: FETCH_REQUESTS_DATA_FAIL,
        payload
    };
};

// Set Request Data
export const setRequestRequestsDataAction = (payload: any) => {
    return {
        type: SET_REQUEST_REQUESTS_DATA,
        payload
    };
};

// Pagination
export const setPagerDataRequests = (pager: any) => {
    return {
        type: SET_PAGER_DATA_REQUESTS,
        pager
    };
};

export const changePageNumberRequestsAction = (page: number) => {
    return {
        type: CHANGE_PAGE_NUMBER_REQUESTS,
        page
    };
};

// Refresh
export const refreshRequests = (payload: boolean) => {
    return {
        type: REFRESH_LOADING_REQUESTS,
        payload
    };
};

// Sort
export const sortRequests = (payload: any) => {
    return {
        type: SORT_REQUESTS,
        payload
    };
};

// Get Request Types
export const getRequestTypesAction  = (params: any) => {
    return {
        type: GET_REQUEST_TYPES,
        params
    }
}

export const getRequestTypesStartAction = () => {
    return {
        type: GET_REQUEST_TYPES_START
    }
}

export const getRequestTypesSuccessAction = (payload: string[]) => {
    return {
        type: GET_REQUEST_TYPES_SUCCESS,
        payload
    }
}

export const getRequestTypesFailAction = (payload: any) => {
    return {
        type: GET_REQUEST_TYPES_FAIL,
        payload
    }
}

// Get Direct manager
export const getRequestDirectManager = (params: any, directType: string) => {
    return {
        type: GET_REQUEST_DIRECT_MANAGER,
        params,
        directType
    }
}

export const getRequestDirectManagerStart = () => {
    return {
        type: GET_REQUEST_DIRECT_MANAGER_START
    }
}

export const getRequestDirectManagerSuccess = (payload: any) => {
    return {
        type: GET_REQUEST_DIRECT_MANAGER_SUCCESS,
        payload
    }
}

export const getRequestDirectManagerFailAction = (payload: any) => {
    return {
        type: GET_REQUEST_DIRECT_MANAGER_FAIL,
        payload
    }
}

// Get Request Shifts
export const getRequestShiftsAction = (params: any) => {
    return {
        type: GET_REQUEST_SHIFTS,
        params
    }
}

export const getRequestShiftsStartAction = () => {
    return {
        type: GET_REQUEST_SHIFTS_START
    }
}

export const getRequestShiftsSuccess = (payload: any) => {
    return {
        type: GET_REQUEST_SHIFTS_SUCCESS,
        payload
    }
}

export const getRequestShiftsFail = (payload: any) => {
    return {
        type: GET_REQUEST_SHIFTS_FAIL,
        payload
    }
}

// Get report user
export const getReportToUserRequestAction = (params: any) => {
    return {
        type: GET_REPORT_TO_USER_REQUESTS,
        params
    }
}

export const getReportToUserRequestStartAction = () => {
    return {
        type: GET_REPORT_TO_USER_REQUESTS_START
    }
}

export const getReportToUserRequestSuccessAction = (payload: any) => {
    return {
        type: GET_REPORT_TO_USER_REQUESTS_SUCCESS,
        payload
    }
}

export const getReportToUserRequestFailAction = (payload: any) => {
    return {
        type: GET_REPORT_TO_USER_REQUESTS_FAIL,
        payload
    }
}

// Validate request
export const validateRequestAction = (params: any) => {
    return {
        type: VALIDATE_REQUEST,
        params
    }
}

export const validateRequestStartAction = () => {
    return {
        type: VALIDATE_REQUEST_START
    }
}

export const validateRequestSuccessAction = () => {
    return {
        type: VALIDATE_REQUEST_SUCCESS
    }
}

export const validateRequestFailAction = (payload: any) => {
    return {
        type: VALIDATE_REQUEST_FAIL,
        payload
    }
}

export const resetValidateRequest  = () => {
    return {
        type: RESET_VALIDATE_REQUEST
    }
}


// Set New Request request data
export const setNewRequestRequestDataAction = (payload: any) => {
    return {
        type: SET_NEW_REQUEST_REQUEST_DATA,
        payload
    }
}

// Set new request
export const setNewRequestAction = () => {
    return {
        type: SET_NEW_REQUEST
    }
}

export const setNewRequestStartAction = () => {
    return {
        type: SET_NEW_REQUEST_START,
    }
}

export const setNewRequestSuccessAction = () => {
    return {
        type: SET_NEW_REQUEST_SUCCESS,
    }
}

export const setNewRequestFailAction = (payload: any) => {
    return {
        type: SET_NEW_REQUEST_FAIL,
        payload
    }
}

export const changeNewRequestStatus = (payload: boolean) => {
    return {
        type: CHANGE_NEW_REQUEST_STATUS,
        payload
    }
}

// Cancel Requests
export const cancelRequestsAction = (params: FormData) => {
    return {
        type: CANCEL_REQUESTS,
        params
    }
}

export const cancelRequestsStartAction = () => {
    return {
        type: CANCEL_REQUESTS_START,
    }
}

export const cancelRequestsSuccessAction = () => {
    return {
        type: CANCEL_REQUESTS_SUCCESS,
    }
}

export const cancelRequestsFailAction = (error: string) => {
    return {
        type: CANCEL_REQUESTS_FAIL,
        error
    }
}

export const resetCancelRequestAction = () => {
    return {
        type: RESET_CANCEL_REQUEST
    }
}


// Filter data
export const changeFilterDataAction = (payload: string[] | string, field: string) => {
    return {
        type: CHANGE_FILTER_DATA_REQUESTS,
        payload,
        field
    }
}

export const clearFilterDataAction = () => {
    return {
        type: CLEAR_FILTER_DATA
    }
}

// Request statuses
export const getRequestStatusesAction = (params: FormData) => {
    return {
        type: GET_REQUEST_STATUSES,
        params
    }
}

export const getRequestStatusesStartAction = () => {
    return {
        type: GET_REQUEST_STATUSES_START,
    }
}

export const getRequestStatusesSuccessAction = (payload: {[index: string]: string}) => {
    return {
        type: GET_REQUEST_STATUSES_SUCCESS,
        payload
    }
}

export const getRequestStatusesFailAction = (error: string) => {
    return {
        type: GET_REQUEST_STATUSES_SUCCESS,
        error
    }
}

// Get one request
export const getRequestAction = (params: FormData) => {
    return {
        type: GET_REQUEST,
        params
    }
}

export const getRequestStartAction = () => {
    return {
        type: GET_REQUEST_START
    }
}

export const getRequestSuccessAction = (payload: any) => {
    return {
        type: GET_REQUEST_SUCCESS,
        payload
    }
}

export const getRequestFailAction = (error: string) => {
    return {
        type: GET_REQUEST_FAIL,
        error
    }
}

// Get Auth history 
export const getAuthHistoryAction = (params: FormData) => {
    return {
        type: GET_REQUEST_AUTH_HISTORY,
        params
    }
}

export const getAuthHistoryStartAction = () => {
    return {
        type: GET_REQUEST_AUTH_HISTORY_START
    }
}

export const getAuthHistorySuccessAction = (payload: any) => {
    return {
        type: GET_REQUEST_AUTH_HISTORY_SUCCESS,
        payload
    }
}

export const getAuthHistoryFailAction = (error: string) => {
    return {
        type: GET_REQUEST_AUTH_HISTORY_FAIL,
        error
    }
}

// GET Absence policies
export const getAbsencePoliciesAction = (params: FormData) => {
    return {
        type: GET_ABSENCE_POLICIES,
        params
    }
}

export const getAbsencePoliciesStartAction = () => {
    return {
        type: GET_ABSENCE_POLICIES_START,
    }
}

export const getAbsencePoliciesSuccessAction = (payload: any) => {
    return {
        type: GET_ABSENCE_POLICIES_SUCCESS,
        payload
    }
}

export const getAbsencePoliciesFailAction = (error: string) => {
    return {
        type: GET_ABSENCE_POLICIES_FAIL,
        error
    }
}

//Get user shifts for validation
export const getUserShiftsForVacationAction = (params: FormData) => {
    return {
        type: GET_USER_SHIFTS_FOR_VACATION,
        params
    }
}

export const getUserShiftsForVacationStartAction = () => {
    return {
        type: GET_USER_SHIFTS_FOR_VACATION_START
    }
}

export const getUserShiftsForVacationSuccessAction = (payload: any) => {
    return {
        type: GET_USER_SHIFTS_FOR_VACATION_SUCCESS,
        payload
    }
}

export const getUserShiftsForVacationFailAction = (error: string) => {
    return {
        type: GET_USER_SHIFTS_FOR_VACATION_FAIL,
        error
    }
}

// Get hourly absence policies
export const getHourlyAbsencePoliciesAction = (params: FormData) => {
    return {
        type: GET_HOURLY_ABSENCE_POLICIES,
        params
    }
} 

export const getHourlyAbsencePoliciesStartAction = () => {
    return {
        type: GET_HOURLY_ABSENCE_POLICIES_START,
    }
} 

export const getHourlyAbsencePoliciesSuccessAction = (payload: any) => {
    return {
        type: GET_HOURLY_ABSENCE_POLICIES_SUCCESS,
        payload
    }
} 

export const getHourlyAbsencePoliciesFailAction = (error: string) => {
    return {
        type: GET_HOURLY_ABSENCE_POLICIES_FAIL,
        error
    }
}

// Get User Schedules by request type
export const getUserSchedulesByRequestTypeAction = (params: FormData) => {
    return {
        type: GET_USER_SCHEDULES_BY_REQUEST_TYPE,
        params
    }
} 

export const getUserSchedulesByRequestTypeStartAction = () => {
    return {
        type: GET_USER_SCHEDULES_BY_REQUEST_TYPE_START,
    }
} 

export const getUserSchedulesByRequestTypeSuccessAction = (payload: any) => {
    return {
        type: GET_USER_SCHEDULES_BY_REQUEST_TYPE_SUCCESS,
        payload
    }
} 

export const getUserSchedulesByRequestTypeFailAction = (error: string) => {
    return {
        type: GET_USER_SCHEDULES_BY_REQUEST_TYPE_FAIL,
        error
    }
}

// Get another users request
export const getAnotherUsersRequestAction = (params: FormData) => {
    return {
        type: GET_ANOTHER_USERS_REQUEST,
        params
    }
}

export const getAnotherUsersRequestStartAction = () => {
    return {
        type: GET_ANOTHER_USERS_REQUEST_START,
    }
}

export const getAnotherUsersRequestSuccessAction = (payload: any) => {
    return {
        type: GET_ANOTHER_USERS_REQUEST_SUCCESS,
        payload
    }
}


export const getAnotherUsersRequestFailAction = (error: string) => {
    return {
        type: GET_ANOTHER_USERS_REQUEST_FAIL,
        error
    }
}

