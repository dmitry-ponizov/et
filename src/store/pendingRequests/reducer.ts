import { IRequestAuthState } from './types';
import produce, { Draft } from 'immer';
import { FETCH_REQUEST_AUTH_DATA_START, FETCH_REQUEST_AUTH_DATA_SUCCESS, FETCH_REQUESTS_AUTH_DATA_FAIL, SET_AUTH_REQUEST_DATA, SET_PAGER_DATA_AUTH_REQUEST, REFRESH_LOADING_AUTH_REQUEST, CHANGE_PAGE_NUMBER_AUTH_REQUEST, SORT_AUTH_REQUEST, CHANGE_FILTER_DATA_AUTH_REQUEST, CLEAR_FILTER_DATA_AUTH_REQUEST, GET_AUTH_REQUEST_TYPES_START, GET_AUTH_REQUEST_TYPES_SUCCESS, GET_AUTH_REQUEST_TYPES_FAIL, GET_AUTH_REQUEST_START, GET_AUTH_REQUEST_SUCCESS, GET_AUTH_REQUEST_FAIL, AUTHORIZE_REQUEST_START, AUTHORIZE_REQUEST_SUCCESS, AUTHORIZE_REQUEST_FAIL, CHANGE_USER_ID_PENDING_REQUESTS, RESET_AUTORIZE } from '../global/actionTypes';
import { requestAuthData } from '../../containers/PendingRequests/constants';

const initialState = {
    data: [],
    loading: false,
    error: null,
    requestTypes: {
        data: {},
        loading: false,
        error: null
    },
    requestData: requestAuthData,
    pager: null,
    refreshLoading: false,
    request: {
        data: {},
        error: null,
        loading: false
    },
    authorize: {
        approve: false,
        decline: false,
        loading: false,
        error: null
    },
    userId: ''
};


const setAuthRequestData = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.requestData = action.payload;
    });
};


const fetchRequestAuthDataStart = (state: IRequestAuthState) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.loading = true;
        draft.error = null;
    });
};

const fetchRequestAuthDataSuccess = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.loading = false;
        draft.error = null;
        draft.data = action.payload;
    });
};

const fetchRequestAuthDataFail = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.loading = false;
        draft.error = action.payload;
        draft.data = []
    });
};

const setPagerDataAuthRequest = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.pager = action.pager;
    });
};

const refreshLoadingAuthRequest = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.refreshLoading = action.payload;
    });
};

const changePageNumberAuthRequest = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.requestData[0].filter_page = action.page;
    });
};

const sortAuthRequest = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.requestData[0].filter_sort = action.payload;
    });
};

const changeFilterDataAuthRequest = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.requestData[0].filter_data[action.field] = action.payload;
    });
};

const clearFilterDataAuthRequest = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.requestData[0].filter_data = {authorization_requests: true}
    });
};

const getRequestTypesStart = (state: IRequestAuthState) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.requestTypes.loading = true;
        draft.requestTypes.error = null;
    });
};

const getRequestTypesSuccess = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.requestTypes.loading = false;
        draft.requestTypes.error = null;
        draft.requestTypes.data = action.payload;
    });
};
const getRequestTypesFail = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.requestTypes.loading = false;
        draft.requestTypes.error = action.payload;
    });
};


const getRequestStart = (state: IRequestAuthState) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.request.loading = true;
        draft.request.error = null;
    });
};

const getRequestSuccess = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.request.data = action.payload;
        draft.request.error = null;
        draft.request.loading = false;
    });
};
const getRequestFail = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.request.loading = false;
        draft.request.error = action.error;
    });
};

const authtorizeRequestStart = (state: IRequestAuthState) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.authorize.loading = true;
        draft.authorize.error = null;
        draft.authorize.approve = false;
        draft.authorize.decline = false;
    });
};

const authtorizeRequestSuccess = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        if(action.payload){
            draft.authorize.approve = true;
        }else {
            draft.authorize.decline = true;
        }
        draft.authorize.error = null;
        draft.authorize.loading = false;
    });
};


const authtorizeRequestFail = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.authorize.loading = false;
        draft.authorize.error = action.error;
        draft.authorize.approve = false;
        draft.authorize.decline = false;
    });
};

const changeUserId = (state: IRequestAuthState, action: any) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.userId = action.payload;
    });
};

const resetAuthtorize = (state: IRequestAuthState) => {
    return produce(state, (draft: Draft<IRequestAuthState>) => {
        draft.authorize.loading = false;
        draft.authorize.error = null;
        draft.authorize.approve = false;
        draft.authorize.decline = false;
    });
};

const pendingRequestsReducer = (state: IRequestAuthState = initialState, action: any) => {
    switch (action.type) {
        case SET_AUTH_REQUEST_DATA:
            return setAuthRequestData(state, action);
        case FETCH_REQUEST_AUTH_DATA_START:
            return fetchRequestAuthDataStart(state);
        case FETCH_REQUEST_AUTH_DATA_SUCCESS:
            return fetchRequestAuthDataSuccess(state, action);
        case FETCH_REQUESTS_AUTH_DATA_FAIL:
            return fetchRequestAuthDataFail(state, action);
        case SET_PAGER_DATA_AUTH_REQUEST: 
            return setPagerDataAuthRequest(state, action);
        case REFRESH_LOADING_AUTH_REQUEST: 
            return refreshLoadingAuthRequest(state, action);
        case CHANGE_PAGE_NUMBER_AUTH_REQUEST: 
            return changePageNumberAuthRequest(state, action);
        case SORT_AUTH_REQUEST: 
            return sortAuthRequest(state, action); 
        case CHANGE_FILTER_DATA_AUTH_REQUEST:
            return changeFilterDataAuthRequest(state, action)
        case CLEAR_FILTER_DATA_AUTH_REQUEST:
            return clearFilterDataAuthRequest(state, action)
        case GET_AUTH_REQUEST_TYPES_START: 
            return getRequestTypesStart(state)
        case GET_AUTH_REQUEST_TYPES_SUCCESS: 
            return getRequestTypesSuccess(state, action)
        case GET_AUTH_REQUEST_TYPES_FAIL: 
            return getRequestTypesFail(state, action)
        case GET_AUTH_REQUEST_START:
            return getRequestStart(state)
        case GET_AUTH_REQUEST_SUCCESS:
            return getRequestSuccess(state, action)
        case GET_AUTH_REQUEST_FAIL:
            return getRequestFail(state, action)
        case AUTHORIZE_REQUEST_START: 
            return authtorizeRequestStart(state)
        case AUTHORIZE_REQUEST_SUCCESS:
            return authtorizeRequestSuccess(state, action)
        case AUTHORIZE_REQUEST_FAIL:
            return authtorizeRequestFail(state, action)
        case CHANGE_USER_ID_PENDING_REQUESTS: 
            return changeUserId(state, action)
        case RESET_AUTORIZE: 
            return resetAuthtorize(state)
        default: return state;
    }
};

export default pendingRequestsReducer;