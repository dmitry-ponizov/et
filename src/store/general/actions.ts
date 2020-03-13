import { CommonType } from './../../constants/common';
import { GET_CURRENT_USER, GET_CURRENT_USER_START, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAIL, AUTH_CHECK_TIMEOUT, GET_STATION_ID, GET_STATION_ID_SUCCESS, SET_EMPLOYEES_PAGER, GET_PERMISSIONS, GET_PERMISSIONS_START, GET_PERMISSIONS_SUCCESS, GET_PERMISSIONS_FAIL } from '../global/actionTypes';
import { 
    AUTH_CHECK_STATE,
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGIN_USER, 
    SET_CURRENT_PAGE,
    TOGGLE_SIDEBAR,
    SET_LANGUAGE,
    SET_SESSION_ID, 
    SET_USER_ID, AUTH_INITIATE_LOGOUT, 
    AUTH_LOGOUT, 
    FETCH_EMPLOYEES_DATA, 
    FETCH_EMPLOYEES_DATA_START, 
    FETCH_EMPLOYEES_DATA_SUCCESS, 
    FETCH_EMPLOYEES_DATA_FAIL,
} from '../global/actionTypes';


export const authCheckState = () => {
    return {
        type: AUTH_CHECK_STATE
    };
};

export const loginUserAction = (params: any) => {
    return {
        type: LOGIN_USER,
        params
    };
};

export const loginStartAction = () => {
    return {
        type: LOGIN_START
    };
};

export const loginSuccessAction = (payload: any) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
};

export const loginFailAction = (error: any) => {
    return {
        type: LOGIN_FAIL,
        error
    };
};

export const setCurrentPageAction = (payload: string) => {
    return {
        type: SET_CURRENT_PAGE,
        payload
    };
};

export const toggleSideBar = () => {
  return {
      type: TOGGLE_SIDEBAR
  };
};

export const setLangAction = (lang: string) => {
    return {
        type: SET_LANGUAGE,
        lang
    };
};

export const setSessionIdAction = (sessionId: string) => {
    return {
        type: SET_SESSION_ID,
        sessionId
    }
}

// Set userId
export const setUserIdAction = (userId: string) => {
    return {
        type: SET_USER_ID,
        userId
    }
}

// logout
export const logoutAction = () => {
    return {
        type: AUTH_INITIATE_LOGOUT
    }
}

export const logoutSuccessAction = () => {
    return {
        type: AUTH_LOGOUT
    }
}



// Fetch employees data
export const fetchEmployeesDataAction = (params: any) => {
    return {
        type: FETCH_EMPLOYEES_DATA,
        params
    }
}

export const fetchEmployeesDataStartAction = () => {
    return {
        type: FETCH_EMPLOYEES_DATA_START
    }
}

export const fetchEmployeesDataSuccessAction = (payload: any) => {
    return {
        type: FETCH_EMPLOYEES_DATA_SUCCESS,
        payload
    }
}

export const fetchEmployeesDataFailAction = (payload: any) => {
    return {
        type: FETCH_EMPLOYEES_DATA_FAIL,
        payload
    }
}

// Set employees pager
export const setEmployeesPagerAction = (payload: any) => {
    return {
        type: SET_EMPLOYEES_PAGER,
        payload
    }
}

// Get Current user
export const getCurrentUserAction = (params: FormData) => {
    return {
        type: GET_CURRENT_USER,
        params
    }
}

export const getCurrentUserStartAction = () => {
    return {
        type: GET_CURRENT_USER_START
    }
}

export const getCurrentUserSuccessAction = (payload: any) => {
    return {
        type: GET_CURRENT_USER_SUCCESS,
        payload
    }
}

export const getCurrentUserFailAction = (error: string) => {
    return {
        type: GET_CURRENT_USER_FAIL,
        error
    }
}

export const checkAuthTimeOut = (expirationTime: any) => {
    return {
        type: AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime * 1000
    }
}

// Get station id
export const getStationIdAction = () => {
    return {
        type: GET_STATION_ID
    }
}

export const getStationIdSuccessAction = (payload: string) => {
    return {
        type: GET_STATION_ID_SUCCESS,
        payload
    }
}

// Get permissions 
export const getPermissionsAction = () => {
    return {
        type: GET_PERMISSIONS
    }
}

export const getPermissionsStartAction = () => {
    return {
        type: GET_PERMISSIONS_START
    }
}

export const getPermissionsSuccessAction = (payload: CommonType) => {
    return {
        type: GET_PERMISSIONS_SUCCESS,
        payload
    }
}

export const getPermissionsFailAction = (error: string) => {
    return {
        type: GET_PERMISSIONS_FAIL,
        error
    }
}