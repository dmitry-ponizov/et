import { IRequestsState } from './types';
import produce, { Draft } from 'immer';
import { GET_REQUEST_SHIFTS_START, GET_REQUEST_SHIFTS_SUCCESS, GET_REQUEST_SHIFTS_FAIL, VALIDATE_REQUEST_START, VALIDATE_REQUEST_SUCCESS, VALIDATE_REQUEST_FAIL, SET_NEW_REQUEST_REQUEST_DATA, SET_NEW_REQUEST_START, SET_NEW_REQUEST_SUCCESS, SET_NEW_REQUEST_FAIL, RESET_VALIDATE_REQUEST, CANCEL_REQUESTS_START, CANCEL_REQUESTS_SUCCESS, CANCEL_REQUESTS_FAIL, CHANGE_FILTER_DATA_REQUESTS, CLEAR_FILTER_DATA, GET_REQUEST_STATUSES_START, GET_REQUEST_STATUSES_SUCCESS, GET_REQUEST_STATUSES_FAIL, GET_REQUEST_START, GET_REQUEST_SUCCESS, GET_REQUEST_FAIL, GET_REQUEST_AUTH_HISTORY_START, GET_REQUEST_AUTH_HISTORY_SUCCESS, GET_REQUEST_AUTH_HISTORY_FAIL, GET_ABSENCE_POLICIES_SUCCESS, GET_ABSENCE_POLICIES_FAIL, GET_ABSENCE_POLICIES_START, GET_USER_SHIFTS_FOR_VACATION_START, GET_USER_SHIFTS_FOR_VACATION_SUCCESS, GET_USER_SHIFTS_FOR_VACATION_FAIL, GET_HOURLY_ABSENCE_POLICIES_START, GET_HOURLY_ABSENCE_POLICIES_SUCCESS, GET_HOURLY_ABSENCE_POLICIES_FAIL, GET_USER_SCHEDULES_BY_REQUEST_TYPE_START, GET_USER_SCHEDULES_BY_REQUEST_TYPE_SUCCESS, GET_USER_SCHEDULES_BY_REQUEST_TYPE_FAIL, GET_ANOTHER_USERS_REQUEST_START, GET_ANOTHER_USERS_REQUEST_SUCCESS, GET_ANOTHER_USERS_REQUEST_FAIL, CHANGE_NEW_REQUEST_STATUS, RESET_CANCEL_REQUEST } from '../global/actionTypes';
import { requestData } from '../../containers/Requests/constants';
import {
    GET_GENERIC_DATA_REQUESTS_START,
    GET_GENERIC_DATA_REQUESTS_SUCCESS,
    GET_GENERIC_DATA_REQUESTS_FAIL,
    SET_REQUEST_REQUESTS_DATA,
    SET_PAGER_DATA_REQUESTS,
    REFRESH_LOADING_REQUESTS,
    CHANGE_PAGE_NUMBER_REQUESTS,
    SORT_REQUESTS,
    SET_GENERIC_DATA_REQUESTS_FAIL,
    FETCH_REQUESTS_DATA_START,
    FETCH_REQUESTS_DATA_SUCCESS,
    FETCH_REQUESTS_DATA_FAIL,
    GET_REQUEST_TYPES_START,
    GET_REQUEST_TYPES_SUCCESS,
    GET_REQUEST_TYPES_FAIL,
    GET_REQUEST_DIRECT_MANAGER_START,
    GET_REQUEST_DIRECT_MANAGER_SUCCESS,
    GET_REQUEST_DIRECT_MANAGER_FAIL,
} from '../global/actionTypes';

const initialState = {
    data: [],
    loading: false,
    error: null,
    genericData: {
        data: [],
        loading: false,
        error: null
    },
    requestData: requestData,
    pager: null,
    refreshLoading: false,
    requestTypes: {
        data: {},
        loading: false,
        error: null
    },
    directManager: {
        data: {},
        loading: false,
        error: null
    },
    shifts: {
        data: [],
        loading: false,
        error: null
    },
    validateRequest: {
        success: false,
        loading: false,
        error: null
    },
    formData: null,
    setNewRequest: {
        success: false,
        error: null,
        loading: false
    },
    cancelRequest: {
        success: false,
        error: null,
        loading: false
    },
    statuses: {
        data: {},
        error: null,
        loading: false
    },
    request: {
        data: {},
        error: null,
        loading: false
    },
    authHistory: {
        data: [],
        error: null,
        loading: false
    },
    absencePolicies: {
        data: {},
        error: null,
        loading: false
    },
    userShifts: {
        data: [],
        loading: false,
        error: null
    },
    hourlyAbsencePolicies: {
        data: {},
        error: null,
        loading: false
    },
    userSchedules: {
        data: [],
        loading: false,
        error: null
    },
    anotherUsers: {
        data: {},
        error: null,
        loading: false
    }
};
const getGenericRequestsDataStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.genericData.loading = true;
        draft.genericData.error = null;
    });
};

const getGenericRequestsDataSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.genericData.loading = false;
        draft.genericData.error = null;
        draft.genericData.data = action.payload;
    });
};

const getGenericRequestsDataFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.genericData.loading = false;
        draft.genericData.error = action.error;
    });
};

const setRequestRequestsData = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.requestData = action.payload;
    });
};

const fetchRequestsData = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.loading = true;
        draft.error = null;
    });
};

const fetchRequestsSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.loading = false;
        draft.error = null;
        draft.data = action.payload;
    });
};

const fetchRequestsFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.loading = false;
        draft.error = action.payload;
    });
};
const setPagerData = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.pager = action.pager;
    });
};
const refreshLoading = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.refreshLoading = action.payload;
    });
};

const setPageNumberRequests = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.requestData[0].filter_page = action.page;
    });
};

const sortRequests = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.requestData[0].filter_sort = action.payload;
    });
};

const setGenericDataRequestsFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.genericData.loading = false;
        draft.genericData.error = action.error;
    });
};

const getRequestTypesStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.requestTypes.loading = true;
        draft.requestTypes.error = null;
    });
};

const getRequestTypesSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.requestTypes.loading = false;
        draft.requestTypes.error = null;
        draft.requestTypes.data = action.payload;
    });
};
const getRequestTypesFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.requestTypes.loading = false;
        draft.requestTypes.error = action.payload;
    });
};

const getRequestDirectManagerStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.directManager.loading = true;
        draft.directManager.error = null;
    });
};

const getRequestDirectManagerSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.directManager.loading = false;
        draft.directManager.error = null;
        draft.directManager.data = action.payload;
    });
};
const getRequestDirectManagerFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.directManager.loading = false;
        draft.directManager.error = action.payload;
    });
};


const getRequestShiftsStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.shifts.loading = true;
        draft.shifts.error = null;
    });
};

const getRequestShiftsSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.shifts.loading = false;
        draft.shifts.error = null;
        draft.shifts.data = action.payload;
    });
};
const getRequestShiftsFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.shifts.loading = false;
        draft.shifts.error = action.payload;
    });
};

const getValidateRequestStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.validateRequest.success = false;
        draft.validateRequest.loading = true;
        draft.validateRequest.error = null;
    });
};

const getValidateRequestSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.validateRequest.success = true;
        draft.validateRequest.error = null;
        draft.validateRequest.loading = false;
    });
};

const getValidateRequestFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.validateRequest.loading = false;
        draft.validateRequest.error = action.payload;
        draft.validateRequest.success = false;
    });
};

const resetValidateRequest = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.validateRequest.success = false;
        draft.validateRequest.loading = false;
        draft.validateRequest.error = null;
        draft.formData = null
    });
};

const setNewRequestRequestData = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.formData = action.payload;
    });
};

const setNewRequestStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.setNewRequest.loading = true;
        draft.setNewRequest.error = null;
    });
};

const setNewRequestSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.setNewRequest.success = true;
        draft.setNewRequest.error = null;
        draft.setNewRequest.loading = false;
    });
};

const setNewRequestFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.setNewRequest.loading = false;
        draft.setNewRequest.error = action.payload;
    });
};

const cancelRequestsStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.cancelRequest.loading = true;
        draft.cancelRequest.error = null;
    });
};

const cancelRequestsSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.cancelRequest.success = true;
        draft.cancelRequest.error = null;
        draft.cancelRequest.loading = false;
    });
};

const cancelRequestsFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.cancelRequest.loading = false;
        draft.cancelRequest.error = action.error;
    });
};
const resetCancelRequest = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.cancelRequest.loading = false;
        draft.cancelRequest.error = null;
        draft.cancelRequest.success = false;
    });
};

const changeFilterDataRequests = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.requestData[0].filter_data[action.field] = action.payload;
    });
};

const clearFilterData = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.requestData[0].filter_data = {sync_flag_id : null}
    });
};

const getRequestStatusesStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.statuses.loading = true;
        draft.statuses.error = null;
    });
};

const getRequestStatusesSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.statuses.data = action.payload;
        draft.statuses.error = null;
        draft.statuses.loading = false;
    });
};

const getRequestStatusesFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.statuses.loading = false;
        draft.statuses.error = action.error;
    });
};


const getRequestStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.request.loading = true;
        draft.request.error = null;
    });
};

const getRequestSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.request.data = action.payload;
        draft.request.error = null;
        draft.request.loading = false;
    });
};

const getRequestFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.request.loading = false;
        draft.request.error = action.error;
    });
};

const getRequestAuthStart  = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.authHistory.loading = true;
        draft.authHistory.error = null;
    });
};

const getRequestAuthSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.authHistory.data = action.payload;
        draft.authHistory.error = null;
        draft.authHistory.loading = false;
    });
};

const getRequestAuthFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.authHistory.loading = false;
        draft.authHistory.error = action.error;
    });
};

const getAbsencePoliciesStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.absencePolicies.loading = true;
        draft.absencePolicies.error = null;
    });
};

const getAbsencePoliciesSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.absencePolicies.data = action.payload;
        draft.absencePolicies.error = null;
        draft.absencePolicies.loading = false;
    });
};

const getAbsencePoliciesFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.absencePolicies.loading = false;
        draft.absencePolicies.error = action.error;
    });
};

const getUserShiftsForVacationStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.userShifts.loading = true;
        draft.userShifts.error = null;
    });
};

const getUserShiftsForVacationSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.userShifts.data = action.payload;
        draft.userShifts.error = null;
        draft.userShifts.loading = false;
    });
};

const getUserShiftsForVacationFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.userShifts.loading = false;
        draft.userShifts.error = action.error;
    });
};

const getHourlyAbsencePoliciesStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.hourlyAbsencePolicies.loading = true;
        draft.hourlyAbsencePolicies.error = null;
    });
};

const getHourlyAbsencePoliciesSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.hourlyAbsencePolicies.data = action.payload;
        draft.hourlyAbsencePolicies.error = null;
        draft.hourlyAbsencePolicies.loading = false;
    });
};

const getHourlyAbsencePoliciesFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.hourlyAbsencePolicies.loading = false;
        draft.hourlyAbsencePolicies.error = action.error;
    });
};

const getUserSchedulesByRequestTypeStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.userSchedules.loading = true;
        draft.userSchedules.error = null;
    });
};

const getUserSchedulesByRequestTypeSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.userSchedules.data = action.payload;
        draft.userSchedules.error = null;
        draft.userSchedules.loading = false;
    });
};

const getUserSchedulesByRequestTypeFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.userSchedules.loading = false;
        draft.userSchedules.error = action.error;
    });
};

const getAnotherUsersRequestStart = (state: IRequestsState) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.anotherUsers.loading = true;
        draft.anotherUsers.error = null;
    });
}

const getAnotherUsersRequestSuccess = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.anotherUsers.data = action.payload;
        draft.anotherUsers.error = null;
        draft.anotherUsers.loading = false;
    });
};

const getAnotherUsersRequestFail = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.anotherUsers.loading = false;
        draft.anotherUsers.error = action.error;
    });
};

const changeNewRequestStatus = (state: IRequestsState, action: any) => {
    return produce(state, (draft: Draft<IRequestsState>) => {
        draft.setNewRequest.success = action.payload;
        draft.setNewRequest.error = null;
    });
};

const requestsReducer = (state: IRequestsState = initialState, action: any) => {
    switch (action.type) {
        case GET_GENERIC_DATA_REQUESTS_START:
            return getGenericRequestsDataStart(state);
        case GET_GENERIC_DATA_REQUESTS_SUCCESS:
            return getGenericRequestsDataSuccess(state, action);
        case GET_GENERIC_DATA_REQUESTS_FAIL:
            return getGenericRequestsDataFail(state, action);
        case SET_REQUEST_REQUESTS_DATA:
            return setRequestRequestsData(state, action);
        case FETCH_REQUESTS_DATA_START:
            return fetchRequestsData(state);
        case FETCH_REQUESTS_DATA_SUCCESS:
            return fetchRequestsSuccess(state, action);
        case FETCH_REQUESTS_DATA_FAIL:
            return fetchRequestsFail(state, action);
        case SET_PAGER_DATA_REQUESTS:
            return setPagerData(state, action);
        case REFRESH_LOADING_REQUESTS:
            return refreshLoading(state, action);
        case CHANGE_PAGE_NUMBER_REQUESTS:
            return setPageNumberRequests(state, action);
        case SORT_REQUESTS:
            return sortRequests(state, action);
        case SET_GENERIC_DATA_REQUESTS_FAIL:
            return setGenericDataRequestsFail(state, action);
        case GET_REQUEST_TYPES_START: 
            return getRequestTypesStart(state)
        case GET_REQUEST_TYPES_SUCCESS: 
            return getRequestTypesSuccess(state, action)
        case GET_REQUEST_TYPES_FAIL: 
            return getRequestTypesFail(state, action)
        case GET_REQUEST_DIRECT_MANAGER_START:
            return getRequestDirectManagerStart(state)
        case GET_REQUEST_DIRECT_MANAGER_SUCCESS:
            return getRequestDirectManagerSuccess(state, action)
        case GET_REQUEST_DIRECT_MANAGER_FAIL:
            return getRequestDirectManagerFail(state, action)
        case GET_REQUEST_SHIFTS_START:
            return getRequestShiftsStart(state)
        case GET_REQUEST_SHIFTS_SUCCESS:
            return getRequestShiftsSuccess(state, action)
        case GET_REQUEST_SHIFTS_FAIL:
            return getRequestShiftsFail(state, action) 
        case VALIDATE_REQUEST_START:   
            return getValidateRequestStart(state)
        case VALIDATE_REQUEST_SUCCESS:
            return getValidateRequestSuccess(state, action)
        case VALIDATE_REQUEST_FAIL: 
            return getValidateRequestFail(state, action)
        case RESET_VALIDATE_REQUEST: 
            return resetValidateRequest(state, action)
        case SET_NEW_REQUEST_REQUEST_DATA: 
            return setNewRequestRequestData(state, action)
        case SET_NEW_REQUEST_START: 
            return setNewRequestStart(state)
        case SET_NEW_REQUEST_SUCCESS: 
            return setNewRequestSuccess(state, action)
        case SET_NEW_REQUEST_FAIL: 
            return setNewRequestFail(state, action)
        case CANCEL_REQUESTS_START: 
            return cancelRequestsStart(state)
        case CANCEL_REQUESTS_SUCCESS: 
            return cancelRequestsSuccess(state, action)
        case CANCEL_REQUESTS_FAIL: 
            return cancelRequestsFail(state, action)
        case RESET_CANCEL_REQUEST: 
            return resetCancelRequest(state)
        case CHANGE_FILTER_DATA_REQUESTS:
            return changeFilterDataRequests(state, action)
        case CLEAR_FILTER_DATA:
            return clearFilterData(state, action)
        case GET_REQUEST_STATUSES_START: 
            return getRequestStatusesStart(state)
        case GET_REQUEST_STATUSES_SUCCESS: 
            return getRequestStatusesSuccess(state, action)
        case GET_REQUEST_STATUSES_FAIL: 
            return getRequestStatusesFail(state, action)
        case GET_REQUEST_START:
            return getRequestStart(state)
        case GET_REQUEST_SUCCESS:
            return getRequestSuccess(state, action)
        case GET_REQUEST_FAIL:
            return getRequestFail(state, action)
        case GET_REQUEST_AUTH_HISTORY_START: 
            return getRequestAuthStart(state)
        case GET_REQUEST_AUTH_HISTORY_SUCCESS:
            return getRequestAuthSuccess(state, action)
        case GET_REQUEST_AUTH_HISTORY_FAIL:
            return getRequestAuthFail(state, action)
        case GET_ABSENCE_POLICIES_START:
            return getAbsencePoliciesStart(state)
        case GET_ABSENCE_POLICIES_SUCCESS:
            return getAbsencePoliciesSuccess(state, action)
        case GET_ABSENCE_POLICIES_FAIL:
            return getAbsencePoliciesFail(state, action)
        case GET_USER_SHIFTS_FOR_VACATION_START: 
            return getUserShiftsForVacationStart(state)
        case GET_USER_SHIFTS_FOR_VACATION_SUCCESS: 
            return getUserShiftsForVacationSuccess(state, action)
        case GET_USER_SHIFTS_FOR_VACATION_FAIL: 
            return getUserShiftsForVacationFail(state, action)
        case GET_HOURLY_ABSENCE_POLICIES_START: 
            return getHourlyAbsencePoliciesStart(state)
        case GET_HOURLY_ABSENCE_POLICIES_SUCCESS: 
            return getHourlyAbsencePoliciesSuccess(state, action)
        case GET_HOURLY_ABSENCE_POLICIES_FAIL: 
            return getHourlyAbsencePoliciesFail(state, action)
        case GET_USER_SCHEDULES_BY_REQUEST_TYPE_START: 
            return getUserSchedulesByRequestTypeStart(state)
        case GET_USER_SCHEDULES_BY_REQUEST_TYPE_SUCCESS: 
            return getUserSchedulesByRequestTypeSuccess(state, action)
        case GET_USER_SCHEDULES_BY_REQUEST_TYPE_FAIL: 
            return getUserSchedulesByRequestTypeFail(state, action)
        case GET_ANOTHER_USERS_REQUEST_START:
            return getAnotherUsersRequestStart(state)
        case GET_ANOTHER_USERS_REQUEST_SUCCESS:
            return getAnotherUsersRequestSuccess(state, action)
        case GET_ANOTHER_USERS_REQUEST_FAIL:
            return getAnotherUsersRequestFail(state, action)
        case CHANGE_NEW_REQUEST_STATUS: 
            return changeNewRequestStatus(state, action)
        default: return state;
        
    }
};

export default requestsReducer;