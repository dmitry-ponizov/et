import { IPunchInOutState, IUserPunch, IPunchOption } from './types';
import { GET_USER_PUNCH_FAIL, GET_USER_PUNCH_START, GET_USER_PUNCH_SUCCESS, GET_PUNCH_STATUSES_START, GET_PUNCH_STATUSES_SUCCESS, GET_PUNCH_STATUSES_FAIL, GET_PUNCH_TYPES_START, GET_PUNCH_TYPES_SUCCESS, GET_PUNCH_TYPES_FAIL, SET_PUNCH_STATUS_ID, SET_PUNCH_TYPE_ID, SET_USER_PUNCH_START, SET_USER_PUNCH_SUCCESS, SET_USER_PUNCH_FAIL, CHANGE_PUNCH_STATUS } from '../global/actionTypes';
import produce, { Draft } from 'immer';

const initialState = {
    userPunch: null,
    loading: false,
    error: null,
    statuses: {
        data: null,
        loading: false,
        error: null
    },
    types: {
        data: null,
        loading: false,
        error: null
    },
    createPunch: {
        status: false,
        loading: false,
        error: null
    }
}

const getUserPunchStart = (state: IPunchInOutState) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.loading = true;
        draft.error = null;
    });
};

const getUserPunchSuccess = (state: IPunchInOutState, action: {type: string; payload: IUserPunch}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.loading = false;
        draft.userPunch = action.payload;
    });
};

const getUserPunchFail = (state: IPunchInOutState, action: {type: string; error: string}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.loading = false;
        draft.error = action.error;
    });
};

const setPunchStatusesStart = (state: IPunchInOutState) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.statuses.loading = true;
        draft.statuses.error = null;
    });
};

const setPunchStatusesSuccess = (state: IPunchInOutState, action: {type: string; payload: IPunchOption}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.statuses.loading = false;
        draft.statuses.data = action.payload;
    });
};

const setPunchStatusesFail = (state: IPunchInOutState, action: {type: string; error: string}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.statuses.loading = false;
        draft.statuses.error = action.error;
    });
};

const setPunchTypesStart = (state: IPunchInOutState) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.types.loading = true;
        draft.types.error = null;
    });
};

const setPunchTypesSuccess = (state: IPunchInOutState, action: {type: string; payload: IPunchOption}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.types.loading = false;
        draft.types.data = action.payload;
    });
};

const setPunchTypesFail = (state: IPunchInOutState, action: {type: string; error: string}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.types.loading = false;
        draft.types.error = action.error;
    });
};

const setPunchStatusId = (state: IPunchInOutState, action: {type: string; payload: number}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        if(draft.userPunch) {
            draft.userPunch['status_id'] = action.payload 
        }
    });
};

const setPunchTypeId = (state: IPunchInOutState, action: {type: string; payload: number}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        if(draft.userPunch) {
            draft.userPunch['type_id'] = action.payload 
        }
    });
};

const setUserPunchStart = (state: IPunchInOutState) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.createPunch.loading = true;
        draft.createPunch.error = null;
        draft.createPunch.status = false;
    });
};

const setUserPunchSuccess = (state: IPunchInOutState) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.createPunch.loading = false;
        draft.createPunch.status = true;
    });
};

const setUserPunchFail= (state: IPunchInOutState, action: {type: string; error: string}) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.createPunch.loading = false;
        draft.createPunch.error = action.error;
    });
};
const changePunchStatus = (state: IPunchInOutState) => {
    return produce(state, (draft: Draft<IPunchInOutState>) => {
        draft.createPunch.status = false;
    });
};

const punchInOutReducer = (state: IPunchInOutState = initialState, action: any) => {
    switch (action.type) {
        case GET_USER_PUNCH_START:
            return getUserPunchStart(state)
        case GET_USER_PUNCH_SUCCESS:
            return getUserPunchSuccess(state, action)
        case GET_USER_PUNCH_FAIL:
            return getUserPunchFail(state, action)
        case GET_PUNCH_STATUSES_START:
            return setPunchStatusesStart(state)
        case GET_PUNCH_STATUSES_SUCCESS:
            return setPunchStatusesSuccess(state, action)
        case GET_PUNCH_STATUSES_FAIL:
            return setPunchStatusesFail(state, action)
        case GET_PUNCH_TYPES_START:
            return setPunchTypesStart(state)
        case GET_PUNCH_TYPES_SUCCESS:
            return setPunchTypesSuccess(state, action)
        case GET_PUNCH_TYPES_FAIL:
            return setPunchTypesFail(state, action)
        case SET_PUNCH_STATUS_ID: 
            return setPunchStatusId(state, action)
        case SET_PUNCH_TYPE_ID: 
            return setPunchTypeId(state, action)
        case SET_USER_PUNCH_START:
            return setUserPunchStart(state)
        case SET_USER_PUNCH_SUCCESS:
            return setUserPunchSuccess(state)
        case SET_USER_PUNCH_FAIL:
            return setUserPunchFail(state, action)
        case CHANGE_PUNCH_STATUS: 
            return changePunchStatus(state)
        default: return state;
    }
};

export default punchInOutReducer;