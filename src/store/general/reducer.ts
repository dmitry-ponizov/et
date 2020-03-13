import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_CURRENT_PAGE,
    TOGGLE_SIDEBAR,
    AUTH_LOGOUT,
    GET_CURRENT_USER_START,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL,
    GET_STATION_ID_SUCCESS,
    GET_PERMISSIONS_SUCCESS,
    GET_PERMISSIONS_FAIL
} from '../global/actionTypes';
import produce, { Draft } from 'immer';
import { IGeneralState } from './types';
import { SET_LANGUAGE, SET_SESSION_ID, SET_USER_ID, FETCH_EMPLOYEES_DATA_START, FETCH_EMPLOYEES_DATA_SUCCESS, FETCH_EMPLOYEES_DATA_FAIL, SET_EMPLOYEES_PAGER, GET_PERMISSIONS_START } from '../global/actionTypes';
import { LoginPath } from '../../routes/constants';

const initialState = {
    sessionId: null,
    loading: null,
    error: null,
    currentPage: LoginPath,
    sideBar: false,
    language: 'en',
    userId: '',
    currentUser: {
        data: {},
        loading: false,
        error: null
    },
    employees: {
        data: [],
        loading: false,
        error: null,
        pager: null
    },
    stationID: '',
    permissons: {
        data: null,
        loading: false,
        error: null,
    }
};

const loginStart = (state: IGeneralState) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.loading = true;
        draft.error = null;
    });
};

const loginSuccess = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.loading = false;
        draft.error = null;
        draft.sessionId = action.payload;
    });
};

const loginFail = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.loading = false;
        draft.error = action.error;
    });
};

const setCurrentPage = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.currentPage = action.payload;
    });
};

const toggleSideBar = (state: IGeneralState) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.sideBar = !draft.sideBar;
    });
};

const setLanguage = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.language = action.lang;
    });
}

const setSessionId = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.sessionId = action.sessionId;
    });
}

const setUserId = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.userId = action.userId;
    });
}
const authLogout = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.sessionId = null;
        draft.userId = ''
    });
}


const fetchEmployeesStart = (state: IGeneralState) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.employees.loading = true;
        draft.employees.error = null;
    });
}

const fetchEmployeesSuccess = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.employees.data = action.payload;
        draft.employees.loading = false;
    });
}

const fetchEmployeesFail = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.employees.loading = false;
        draft.employees.error = action.payload;
    });
}

const getCurrentUserStart = (state: IGeneralState) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.currentUser.loading = true;
        draft.currentUser.error = null;
    });
}

const getCurrentUserSuccess = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.currentUser.data = action.payload;
        draft.currentUser.loading = false;
        draft.currentUser.error = null;
    });
}

const getCurrentUserFail = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.currentUser.loading = false;
        draft.currentUser.error = action.error;
        draft.currentUser.data = {};
    });
}

const setStationId = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.stationID = action.payload;
    });
}

const setEmployeesPager = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.employees.pager = action.payload;
    });
}

const getPermissionsStart = (state: IGeneralState) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.permissons.loading = true;
        draft.permissons.error = null;
    });
}

const getPermissionsSuccess = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.permissons.data = action.payload;
        draft.permissons.loading = false;
        draft.permissons.error = null;
    });
}

const getPermissionsFail = (state: IGeneralState, action: any) => {
    return produce(state, (draft: Draft<IGeneralState>) => {
        draft.permissons.loading = false;
        draft.permissons.error = action.error;
    });
}

const authReducer = (state: IGeneralState = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_START: return loginStart(state);
        case LOGIN_SUCCESS: return loginSuccess(state, action);
        case LOGIN_FAIL: return loginFail(state, action);
        case SET_CURRENT_PAGE: return setCurrentPage(state, action);
        case TOGGLE_SIDEBAR: return toggleSideBar(state);
        case SET_LANGUAGE: return setLanguage(state, action);
        case SET_SESSION_ID: return setSessionId(state, action)
        case SET_USER_ID: return setUserId(state, action)
        case AUTH_LOGOUT: return authLogout(state, action)
        case FETCH_EMPLOYEES_DATA_START:
            return fetchEmployeesStart(state)
        case FETCH_EMPLOYEES_DATA_SUCCESS:
            return fetchEmployeesSuccess(state, action)
        case FETCH_EMPLOYEES_DATA_FAIL:
            return fetchEmployeesFail(state, action)
        case SET_EMPLOYEES_PAGER:
            return setEmployeesPager(state, action)
        case GET_CURRENT_USER_START:
            return getCurrentUserStart(state)
        case GET_CURRENT_USER_SUCCESS:
            return getCurrentUserSuccess(state, action)
        case GET_CURRENT_USER_FAIL:
            return getCurrentUserFail(state, action)
        case GET_STATION_ID_SUCCESS:
            return setStationId(state, action)
        case GET_PERMISSIONS_START:
            return getPermissionsStart(state)
        case GET_PERMISSIONS_SUCCESS:
            return getPermissionsSuccess(state, action)
        case GET_PERMISSIONS_FAIL:
            return getPermissionsFail(state, action)
        default: return state;
    }
};

export default authReducer;