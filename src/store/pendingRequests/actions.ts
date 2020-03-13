import { CHANGE_USER_ID_PENDING_REQUESTS, RESET_AUTORIZE } from '../global/actionTypes';
import { 
    FETCH_REQUEST_AUTH_DATA, 
    FETCH_REQUEST_AUTH_DATA_START, 
    FETCH_REQUEST_AUTH_DATA_SUCCESS, 
    FETCH_REQUESTS_AUTH_DATA_FAIL, 
    SET_AUTH_REQUEST_DATA, 
    SET_PAGER_DATA_AUTH_REQUEST, 
    CHANGE_PAGE_NUMBER_AUTH_REQUEST, 
    REFRESH_LOADING_AUTH_REQUEST, 
    SORT_AUTH_REQUEST, 
    CHANGE_FILTER_DATA_AUTH_REQUEST, 
    CLEAR_FILTER_DATA_AUTH_REQUEST, 
    GET_REQUEST_AUTH_TYPES, 
    GET_AUTH_REQUEST_TYPES_START, 
    GET_AUTH_REQUEST_TYPES_SUCCESS, 
    GET_AUTH_REQUEST_TYPES_FAIL, 
    GET_AUTH_REQUEST, 
    GET_AUTH_REQUEST_START, 
    GET_AUTH_REQUEST_SUCCESS, 
    GET_AUTH_REQUEST_FAIL, 
    AUTHORIZE_REQUEST, 
    AUTHORIZE_REQUEST_START, 
    AUTHORIZE_REQUEST_SUCCESS, 
    AUTHORIZE_REQUEST_FAIL 
} from '../global/actionTypes';


// Set Request Data
export const setAuthRequestDataAction = (payload: any) => {
    return {
        type: SET_AUTH_REQUEST_DATA,
        payload
    };
};

// Fetch requests
export const fetchRequestAuthDataAction = (url: string) => {
    return {
        type: FETCH_REQUEST_AUTH_DATA,
        url
    };
};

export const fetchRequestAuthDataStartAction = () => {
    return {
        type: FETCH_REQUEST_AUTH_DATA_START
    };
};

export const fetchRequestAuthDataSuccessAction = (payload: any) => {
    return {
        type: FETCH_REQUEST_AUTH_DATA_SUCCESS,
        payload
    };
};

export const fetchRequestAuthDataFailAction = (payload: any) => {
    return {
        type: FETCH_REQUESTS_AUTH_DATA_FAIL,
        payload
    };
};

// Pagination
export const setPagerDataAuthRequestAction  = (pager: any) => {
    return {
        type: SET_PAGER_DATA_AUTH_REQUEST,
        pager
    };
};

export const changePageNumberAuthRequestAction = (page: number) => {
    return {
        type: CHANGE_PAGE_NUMBER_AUTH_REQUEST,
        page
    };
};

// Refresh
export const refreshAuthRequest = (payload: boolean) => {
    return {
        type: REFRESH_LOADING_AUTH_REQUEST,
        payload
    };
};

// Sort
export const sortAuthRequest= (payload: any) => {
    return {
        type: SORT_AUTH_REQUEST,
        payload
    };
};

// Filter data
export const changeFilterDataAction = (payload: string[] | string, field: string) => {
    return {
        type: CHANGE_FILTER_DATA_AUTH_REQUEST,
        payload,
        field
    }
}


export const clearFilterDataAction = () => {
    return {
        type: CLEAR_FILTER_DATA_AUTH_REQUEST
    }
}


// Get Request Types
export const getRequestTypesAction  = (params: any) => {
    return {
        type: GET_REQUEST_AUTH_TYPES,
        params
    }
}

export const getRequestTypesStartAction = () => {
    return {
        type: GET_AUTH_REQUEST_TYPES_START
    }
}

export const getRequestTypesSuccessAction = (payload: string[]) => {
    return {
        type: GET_AUTH_REQUEST_TYPES_SUCCESS,
        payload
    }
}

export const getRequestTypesFailAction = (payload: any) => {
    return {
        type: GET_AUTH_REQUEST_TYPES_FAIL,
        payload
    }
}


// Get one request
export const getRequestAction = (params: FormData) => {
    return {
        type: GET_AUTH_REQUEST,
        params
    }
}

export const getRequestStartAction = () => {
    return {
        type: GET_AUTH_REQUEST_START
    }
}

export const getRequestSuccessAction = (payload: any) => {
    return {
        type: GET_AUTH_REQUEST_SUCCESS,
        payload
    }
}

export const getRequestFailAction = (error: string) => {
    return {
        type: GET_AUTH_REQUEST_FAIL,
        error
    }
}


// Authtorize request
export const authtorizeRequestAction = (params: FormData, status: boolean) => {
    return {
        type: AUTHORIZE_REQUEST,
        params,
        status
    }
}

export const authtorizeRequestStartAction = () => {
    return {
        type: AUTHORIZE_REQUEST_START,
    }
}

export const authtorizeRequestSuccessAction = (payload: boolean) => {
    return {
        type: AUTHORIZE_REQUEST_SUCCESS,
        payload
    }
}

export const authtorizeRequestFailAction = (error: string) => {
    return {
        type: AUTHORIZE_REQUEST_FAIL,
        error
    }
}


export const resetAutorizeAction = () => {
    return {
        type: RESET_AUTORIZE
    }
}

//Change user id
export const changeUserIdPendingRequestsAction = (payload: string) => {
    return {
        type: CHANGE_USER_ID_PENDING_REQUESTS,
        payload
    }
}