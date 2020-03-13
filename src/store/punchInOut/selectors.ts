import { IPunchInOutState } from './types';

export const userPunchSelector = (state: IPunchInOutState) => {
    return state.userPunch;
}

export const userPunchLoadingSelector = (state: IPunchInOutState) => {
    return state.loading;
}

export const userPunchErrorSelector = (state: IPunchInOutState) => {
    return state.error;
}

export const getPunchStatusesSelector = (state: IPunchInOutState) => {
    return state.statuses.data;
}

export const getPunchStatusesLoadingSelector = (state: IPunchInOutState) => {
    return state.statuses.loading;
}

export const getPunchStatusesErrorSelector = (state: IPunchInOutState) => {
    return state.statuses.error;
}

export const getPunchTypesSelector = (state: IPunchInOutState) => {
    return state.types.data;
}

export const getPunchTypesLoadingSelector = (state: IPunchInOutState) => {
    return state.types.loading;
}

export const getPunchTypesErrorSelector = (state: IPunchInOutState) => {
    return state.types.error;
}

export const setUserPunchStatusSelector = (state: IPunchInOutState) => {
    return state.createPunch.status;
}

export const setUserPunchStatusLoadingSelector = (state: IPunchInOutState) => {
    return state.createPunch.loading;
}

export const setUserPunchStatusErrorSelector = (state: IPunchInOutState) => {
    return state.createPunch.error;
}