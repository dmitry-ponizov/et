import { IRequestsState } from './types';

export const getRequestsRequestDataSelector = (state: any) => {
    if (!state.requests.requestData || !state.requests.requestData) return null;
    return state.requests.requestData;
};

export const getRequestsLoadingSelector = (state: IRequestsState) => {
    return state.loading
}

export const getRequestsDataSelector = (state: any) => {
    if (!state.requests.data || !state.requests.data) return null;
    return state.requests.data.filter((request: any) => request.status === 'PENDING')
}

export const getDisplayColumnsRequests = (state: any) => {
    if (
        !state ||
        !state.genericData ||
        !state.genericData.data ||
        !state.genericData.data.data ||
        !state.genericData.data.data.display_columns
    ) {
        return null;
    }
    return state.genericData.data.data.display_columns;
};

export const getErrorRequestsSelector = (state: IRequestsState) => {
    return state.error;
};

export const getPagerRequestsSelector = (state: IRequestsState) => {
    if (
        !state ||
        !state.pager
    ) {
        return null;
    }
    return state.pager;
};

export const getGenericDataSelector = (state: IRequestsState) => {
    if (!state || !state.genericData || !state.genericData) return null;
    return state.genericData;
};
export const getRefreshLoading = (state: IRequestsState) => {
    return state.refreshLoading;
};

export const getRequestTypesSelector = (state: IRequestsState) => {
    if(!state || !state.requestTypes || !state.requestTypes.data) {
        return null
    }
    return state.requestTypes.data
}

export const getDirectManagerSelector = (state: IRequestsState) => {
    if(!state || !state.directManager || !state.directManager.data) {
        return null
    }
    return state.directManager.data
} 

export const getShiftsRequestSelector = (state: IRequestsState) => {
    if(!state || !state.shifts || !state.shifts.data) {
        return null
    }
    return state.shifts.data
}

export const getValidateErrorSelector = (state: IRequestsState) => {
    if (!state || !state.validateRequest || !state.validateRequest.error) {
        return null
    }
    return state.validateRequest.error;
}

export const getFormDataSelector = (state: any) => {
    if (!state || !state.requests || !state.requests.formData) {
        return null
    }
    return state.requests.formData;
}

export const successValidationSelector = (state: IRequestsState) => {
    if(!state || !state.validateRequest || !state.validateRequest.success) {
        return false
    }
    return state.validateRequest.success;
}

export const cancelRequestSuccessSelector = (state: IRequestsState) => {
    return state.cancelRequest.success;
}

export const getCancelRequestErrorSelector = (state: IRequestsState) => {
    if(!state || !state.cancelRequest || !state.cancelRequest.error) {
        return null
    }
    return state.cancelRequest.error;
}

export const getNewRequestLoadingSelector = (state: IRequestsState) => {
    return state.setNewRequest.loading;
}

export const getCancelRequestLoadingSelector = (state: IRequestsState) => {
    return state.cancelRequest.loading;
}

export const getValidateLoadingSelector = (state: IRequestsState) => {
    return state.validateRequest.loading; 
}

export const getRequestTypesLoadingSelector = (state: IRequestsState) => {
    return state.requestTypes.loading
}

const issetFilterData = (state: IRequestsState) => {
    if (!state || !Boolean(state.requestData.length) || !state.requestData[0] || !state.requestData[0].filter_data) {
        return true;
    }
    return false
}

export const getUserIdsSelector = (state: IRequestsState) => {
    if (issetFilterData(state) || !state.requestData[0].filter_data.user_id) {
        return []
    }
    return state.requestData[0].filter_data.user_id;
}

export const getRequestTypeIdsSelector = (state: IRequestsState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.type_id) {
        return []
    }
    return state.requestData[0].filter_data.type_id;
}

export const getStartDateSelector = (state: IRequestsState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.start_date) {
        return null
    }
    return state.requestData[0].filter_data.start_date;
}

export const getEndDateSelector = (state: IRequestsState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.end_date) {
        return null
    }
    return state.requestData[0].filter_data.end_date;
}

export const getRequestStatusesSelector = (state: IRequestsState) => {
    if(!state.statuses || !state.statuses.data) {
        return null
    }
    return state.statuses.data;
}

export const getStatusesLoadingSelector = (state: IRequestsState) => {
    return state.statuses.loading;
}

export const getStatusesIdsSelector = (state: IRequestsState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.status_id) {
        return []
    }
    return state.requestData[0].filter_data.status_id;
}

export const getCreatedByIdsSelector = (state: IRequestsState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.created_by) {
        return []
    }
    return state.requestData[0].filter_data.created_by;
}

export const getUpdatedByIdsSelector = (state: IRequestsState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.updated_by) {
        return []
    }
    return state.requestData[0].filter_data.updated_by;
}

export const getOtherIdsSelector = (state: IRequestsState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.other_user_id) {
        return []
    }
    return state.requestData[0].filter_data.other_user_id;
}

export const getRequestDataSelector = (state: IRequestsState) => {
    if(!state.request || !Boolean(Object.keys(state.request.data).length)) {
        return null;
    }
    return state.request.data;
}

export const getRequestLoadingSelector = (state: IRequestsState) => {
    return state.request.loading;
}

export const getRequestErrorSelector = (state: IRequestsState) => {
    return state.request.error;
}

export const getAuthHistorySelector = (state: IRequestsState) => {
    if(!state.authHistory || Boolean(!state.authHistory.data.length)) {
        return []
    }
    return state.authHistory.data;
}

export const getAuthHistoryLoadingSelector = (state: IRequestsState) => {
    return state.authHistory.loading;
}

export const getAuthHistoryErrorSelector = (state: IRequestsState) => {
    return state.authHistory.error;
}

export const getAbsencePoliciesSelector  = (state: IRequestsState) => {
    if(!state.request || !Boolean(Object.keys(state.absencePolicies.data).length)) {
        return {};
    }
    return state.absencePolicies.data;
}

export const getAbsencePoliciesLoadingSelector = (state: IRequestsState) => {
    return state.absencePolicies.loading;
}

export const getAbsencePoliciesErrorSelector = (state: IRequestsState) => {
    return state.absencePolicies.error;
}

export const getHourlyAbsencePoliciesSelector  = (state: IRequestsState) => {
    if(!state.request || !Boolean(Object.keys(state.hourlyAbsencePolicies.data).length)) {
        return {};
    }
    return state.hourlyAbsencePolicies.data;
}

export const getHourlyAbsencePoliciesLoadingSelector = (state: IRequestsState) => {
    return state.hourlyAbsencePolicies.loading;
}

export const getHourlyAbsencePoliciesErrorSelector = (state: IRequestsState) => {
    return state.hourlyAbsencePolicies.error;
}


export const getUserShiftsSelector = (state: IRequestsState) => {
    if(!state.userShifts || !Boolean(Object.keys(state.userShifts.data).length)) {
        return {}
    }
    return state.userShifts.data;
}

export const getUserSchedulesSelector = (state: IRequestsState) => {
    if(!state.userShifts || !Boolean(Object.keys(state.userSchedules.data).length)) {
        return {}
    }
    return state.userSchedules.data;
}


export const getUserSchedulesLoadingSelector = (state: IRequestsState) => {
    return state.userSchedules.loading;
}

export const getAnotherUsersSelector = (state: IRequestsState) => {
    if(!state.anotherUsers || !Object.keys(state.anotherUsers.data).length) {
        return {}
    }
    return state.anotherUsers.data;
} 

export const getAnotherUsersLoadingSelector = (state: IRequestsState) => {
    return state.anotherUsers.loading;
}

export const getUserShiftsLoadingSelector = (state: IRequestsState) => {
    return state.userShifts.loading;
}

export const getStatusCreateNewRequestSelector = (state: IRequestsState) => {
    return state.setNewRequest.success;
}
export const getCreateRequestError = (state: IRequestsState) => {
    return state.setNewRequest.error;
}
