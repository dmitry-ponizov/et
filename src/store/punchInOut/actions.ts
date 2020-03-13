import { 
    GET_USER_PUNCH, 
    GET_USER_PUNCH_START, 
    GET_USER_PUNCH_SUCCESS, 
    GET_USER_PUNCH_FAIL, 
    GET_PUNCH_STATUSES, 
    GET_PUNCH_STATUSES_START, 
    GET_PUNCH_STATUSES_SUCCESS, 
    GET_PUNCH_STATUSES_FAIL, 
    GET_PUNCH_TYPES, 
    GET_PUNCH_TYPES_START, 
    GET_PUNCH_TYPES_SUCCESS, 
    GET_PUNCH_TYPES_FAIL, 
    SET_USER_PUNCH, 
    SET_USER_PUNCH_START, 
    SET_USER_PUNCH_FAIL, 
    SET_USER_PUNCH_SUCCESS, 
    SET_PUNCH_STATUS_ID, 
    SET_PUNCH_TYPE_ID 
} from '../global/actionTypes';
import { IUserPunch, IPunchOption } from './types';
import { CHANGE_PUNCH_STATUS } from '../global/actionTypes';

// Get user punch
export const getUserPunchAction = (params: FormData, stationId: string) => {
    return {
        type: GET_USER_PUNCH,
        params,
        stationId
    }
}
export const getUserPunchStartAction = () => {
    return {
        type: GET_USER_PUNCH_START
    }
}

export const getUserPunchSuccessAction = (payload: IUserPunch) => {
    return {
        type: GET_USER_PUNCH_SUCCESS,
        payload
    }
}
export const getUserPunchErrorAction = (error: string) => {
    return {
        type: GET_USER_PUNCH_FAIL,
        error
    }
}

// Get punch statuses
export const getPunchStatusesAction = (params: FormData) => {
    return {
        type: GET_PUNCH_STATUSES,
        params,
    }
}

export const getPunchStatusesStartAction = () => {
    return {
        type: GET_PUNCH_STATUSES_START
    }
}

export const getPunchStatusesSuccessAction = (payload: IPunchOption) => {
    return {
        type: GET_PUNCH_STATUSES_SUCCESS,
        payload
    }
}

export const getPunchStatusesFailAction = (error: string) => {
    return {
        type: GET_PUNCH_STATUSES_FAIL,
        error
    }
}

// Get punch types
export const getPunchTypesAction = (params: FormData) => {
    return {
        type: GET_PUNCH_TYPES,
        params,
    }
}

export const getPunchTypesStartAction = () => {
    return {
        type: GET_PUNCH_TYPES_START
    }
}

export const getPunchTypesSuccessAction = (payload: IPunchOption) => {
    return {
        type: GET_PUNCH_TYPES_SUCCESS,
        payload
    }
}

export const getPunchTypesFailAction = (error: string) => {
    return {
        type: GET_PUNCH_TYPES_FAIL,
        error
    }
}

// Set punch status id 
export const setPunchStatusId = (payload: number) => {
    return {
        type: SET_PUNCH_STATUS_ID,
        payload
    }
}

// Set punch type id 
export const setPunchTypeId = (payload: number) => {
    return {
        type: SET_PUNCH_TYPE_ID,
        payload
    }
}

// Set user punch
export const setUserPunchAction = (params: FormData) => {
    return {
        type: SET_USER_PUNCH,
        params
    }
}

export const setUserPunchStartAction = () => {
    return {
        type: SET_USER_PUNCH_START
    }
}

export const setUserPunchSuccessAction = () => {
    return {
        type: SET_USER_PUNCH_SUCCESS
    }
}

export const setUserPunchFailAction = (error: string) => {
    return {
        type: SET_USER_PUNCH_FAIL,
        error
    }
}

// Change created status
export const changePunchStatusAction = () => {
    return {
        type: CHANGE_PUNCH_STATUS
    }
}