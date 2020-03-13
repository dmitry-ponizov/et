import { IRequestAuthState } from './types';

export const getAuthRequestRequestData = (state: any) => {
    if(!state.pendingRequests.requestData || !state.pendingRequests.requestData) return null;
    return state.pendingRequests.requestData;
};

export const getAuthRequesGenericDataSelector = (state: any) => {
    if(!state.pendingRequests.data || !state.pendingRequests.data) return null;
    return state.pendingRequests.data;
};



export const getErrorAuthRequestsSelector = (state: any) => {
    if (
        !state ||
        !state.error
    ) {
        return null;
    }
    return state.error;
};

export const getPagerAuthRequestsSelector = (state: any) => {
    if (
        !state ||
        !state.pager
    ) {
        return null;
    }
    return state.pager;
};

export const getGenericDataSelector = (state: any) => {
    if(!state || !state.genericData || !state.genericData) return null;
    return state.genericData;
};


export const getRefreshLoadingSelector = (state: any) => {
    if(!state || !state.refreshLoading) return null;
    return state.refreshLoading;
};

const issetFilterData = (state: IRequestAuthState) => {
    if (!state || !Boolean(state.requestData.length) || !state.requestData[0] || !state.requestData[0].filter_data) {
        return true;
    }
    return false
}

export const getUserIdsSelector = (state: IRequestAuthState) => {
    if (issetFilterData(state) || !state.requestData[0].filter_data.user_id) {
        return []
    }
    return state.requestData[0].filter_data.user_id;
}

export const getRequestTypesLoadingSelector = (state: IRequestAuthState) => {
    return state.requestTypes.loading
}

export const getRequestTypesSelector = (state: IRequestAuthState) => {
    if(!state || !state.requestTypes || !state.requestTypes.data) {
        return null
    }
    return state.requestTypes.data
}


export const getRequestTypeIdsSelector = (state: IRequestAuthState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.type_id) {
        return []
    }
    return state.requestData[0].filter_data.type_id;
}

export const getStartDateSelector = (state: IRequestAuthState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.start_date) {
        return null
    }
    return state.requestData[0].filter_data.start_date;
}

export const getEndDateSelector = (state: IRequestAuthState) => {
    if (issetFilterData(state) ||  !state.requestData[0].filter_data.end_date) {
        return null
    }
    return state.requestData[0].filter_data.end_date;
}


export const getRequestDataSelector = (state: IRequestAuthState) => {
    if(!state.request || !Boolean(Object.keys(state.request.data).length)) {
        return null;
    }
    return state.request.data;
}


export const getRequestLoadingSelector = (state: IRequestAuthState) => {
    return state.request.loading;
}

export const getRequestErrorSelector = (state: IRequestAuthState) => {
    return state.request.error;
}

export const getAuthLoadingSelector = (state: IRequestAuthState) => {
    return state.authorize.loading;
}

export const getUserIdPendingRequestsSelector = (state: any) => {
    return state.authRequest.userId
}

export const getApproveStatusSelector = (state: IRequestAuthState) => {
    return state.authorize.approve;
}
export const getDeclineStatusSelector = (state: IRequestAuthState) => {
    return state.authorize.decline;
}
export const autorizeDeclineErrorSelector = (state: IRequestAuthState) => {
    return state.authorize.error;
}
export const getPendingRequestUserIdSelector = (state: IRequestAuthState) => {
    return state.userId;
}